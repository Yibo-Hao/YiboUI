<template>
  <div class="tabs-nav">
    <slot name="items"></slot>
    <div class="actionsWrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "yibo-tabs-nav",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:name", name);
  }
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.tabs-nav {
  display: flex;
  min-height: $tab-height;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid red;
  > .actionsWrapper {
    margin-left: auto;
  }
}
</style>
