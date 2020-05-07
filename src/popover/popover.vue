<template>
  <div class="popover" @click="Click">
    <div
      class="content-wrapper"
      v-if="visible"
      ref="contentWrapper"
      :class="{ [`position-${position}`]: true }"
    >
      <slot></slot>
    </div>
    <span ref="triggerWrapper" class="reference">
      <slot name="reference"></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "yibo-popover",
  data() {
    return { visible: false };
  },
  methods: {
    getPosition() {
      document.body.appendChild(this.$refs.contentWrapper);
      let { left, top ,height} = this.$refs.triggerWrapper.getBoundingClientRect();
      if (this.position === "top") {
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
      } else if (this.position === "bottom") {
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top = top + height+window.scrollY + "px";
      }
    },
    Click(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    },
    documentCallBack(e) {
      if (this.$refs.contentWrapper.contains(e.target)) {
      } else {
        this.close();
      }
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.documentCallBack);
    },
    open() {
      this.visible = true;
      setTimeout(() => {
        this.getPosition();
        document.addEventListener("click", this.documentCallBack);
      }, 0);
    }
  },
  props: {
    position: {
      type: String,
      default: "bottom",
      validator(value) {
        return ["top", "bottom"].includes(value);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .reference {
    display: inline-block;
  }
}
.content-wrapper {
  position: absolute;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::after,
  &::before {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 10px;
    position: absolute;
  }
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::before {
      border-top-color: rgba(0, 0, 0, 0.19);
      top: 100%;
      left: 10px;
    }
    &::after {
      top: calc(100% - 1px);
      border-top-color: white;
      left: 10px;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom-color: rgba(0, 0, 0, 0.19);
      bottom: 100%;
      left: 10px;
    }
    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: white;
      left: 10px;
    }
  }
}
</style>
