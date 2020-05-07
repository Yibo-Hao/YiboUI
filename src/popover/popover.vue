<template>
  <div class="popover" @click.stop="pop">
    <div
      class="content-wrapper"
      v-if="visible"
      @click.stop
      ref="contentWrapper"
    >
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
    pop() {
      this.visible = !this.visible;
      if (this.visible === true) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper);
          let {
            width,
            height,
            left,
            top
          } = this.$refs.triggerWrapper.getBoundingClientRect();
          this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
          this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
          const outClick = () => {
            this.visible = false;
            document.removeEventListener("click", outClick);
          };
          document.addEventListener("click", outClick);
        }, 0);
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
}
.content-wrapper {
  position: absolute;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-125%);
}
</style>
