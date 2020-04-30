<template>
  <div class="tabs-nav">
    <slot name="items" @activeVm="passingThis"></slot>
    <div class="actionsWrapper">
      <slot name="actions"></slot>
    </div>
    <g-tab-bar :tabs="activeVm" ></g-tab-bar>
  </div>
</template>
<script>
import tabsBar from "./tabs-bar";

export default {
  name: "yibo-tabs-nav",
  inject: ["eventBus"],
  data() {
    return {
      activeVm: null
    };
  },
  components: {
    "g-tab-bar": tabsBar
  },
  mounted() {
    this.eventBus.$on("activeVm", this.passingThis);
  },
  methods: {
    passingThis(activeVm) {
      this.activeVm = activeVm;
    }
  }
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
$blue: #1890ff;
.tabs-nav {
  display: flex;
  height: $tab-height;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  > .actionsWrapper {
    margin-left: auto;
  }
}
</style>
