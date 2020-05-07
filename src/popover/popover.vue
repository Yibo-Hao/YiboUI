<template>
  <div class="popover" @click="Click">
    <div class="content-wrapper" v-if="visible" ref="contentWrapper">
      <slot></slot>
    </div>
    <span ref="triggerWrapper">
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
      let { left, top } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
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
  }
};
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-125%);
}
</style>
