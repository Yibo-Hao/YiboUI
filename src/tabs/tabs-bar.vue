<template>
  <div class="tab-bar" :style="barStyle"></div>
</template>
<script>
export default {
  name: "yibo-tab-bar",
  props: ["tabs"],
  computed: {
    barStyle: {
      get() {
        let barWidth = 0;
        let style = {};
        if (this.tabs && this.tabs.active) {
          barWidth += this.tabs.$el.clientWidth;
          let transformAfter = this.tabs.$el.offsetLeft;
          style.width = barWidth + "px";
          style.left = transformAfter + "px";
        }

        return style;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: #1890ff;
.tab-bar {
  border-bottom: 1px solid $blue;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
