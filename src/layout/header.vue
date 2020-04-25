<template>
  <div class="header">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "yibo-footer"
};
</script>
<style lang="scss" scoped>
.header {
  background: #7dbcea;
  min-height: 64px;
}
</style>
