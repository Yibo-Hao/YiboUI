<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "yibo-layout",
  data() {
    return {
      layoutClass: {
        hasSide: false
      }
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "yibo-side") {
        this.layoutClass.hasSide = true;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSide {
    flex-direction: row;
  }
}
</style>
