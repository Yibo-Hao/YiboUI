<template>
  <div class="popover" ref="popover">
    <transition name="fade">
      <div
        class="content-wrapper"
        v-if="visible"
        ref="contentWrapper"
        :class="{ [`position-${position}`]: true }"
      >
        <slot></slot>
      </div>
    </transition>
    <span ref="triggerWrapper" class="reference">
      <slot name="reference"></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "yibo-popover",
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", e => {
        this.Click(e);
      });
    } else {
      this.$refs.triggerWrapper.addEventListener("mouseenter", e => {
        window.clearTimeout(this.timerId);
        this.timer = setTimeout(() => {
          this.open(e);
        }, 150);
      });
      this.$refs.triggerWrapper.addEventListener("mouseleave", e => {
        window.clearTimeout(this.timerId);
        this.timerId = setTimeout(() => {
          this.close(e);
        }, 150);
      });
    }
  },
  updated() {
    if (this.$refs.contentWrapper) {
      this.$refs.contentWrapper.addEventListener("mouseenter", e => {
        if (this.timerId) {
          this.open(e);
          window.clearTimeout(this.timerId);
          this.timerId = null;
        }
      });
      this.$refs.contentWrapper.addEventListener("mouseleave", e => {
        window.clearTimeout(this.timerId);
        this.close(e);
      });
    }
  },
  data() {
    return {
      visible: false,
      contentWrapper: this.$refs.contentWrapper,
      triggerWrapper: this.$refs.triggerWrapper,
      timerId: null
    };
  },
  methods: {
    getPosition() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        left,
        top,
        height
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      if (this.position === "top") {
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
      } else if (this.position === "bottom") {
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top =
          top + height + window.scrollY + "px";
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
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].includes(value);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active {
  transition: 0.1s opacity ease-in;
}
.fade-leave-active {
  transition: 0.1s opacity ease-out;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
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
