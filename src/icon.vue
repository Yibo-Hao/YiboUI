<template>
  <svg v-if="icon in icons" class="icon">
    <use :xlink:href="'#i-' + icon"></use>
  </svg>
</template>
<script>

import "./svg";
export default {
  name:"yibo-icon",
  data: function() {
    return {
      icons: {
        down: "down",
        setting: "setting",
        download: "download",
        right: "right",
        left: "left",
        like: "like",
        load: "load",
        info:"info",
        error:"error"
      }
    };
  },
  props: ["icon"]
};
</script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
