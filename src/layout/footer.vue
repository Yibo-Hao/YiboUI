<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "yibo-footer"
};
</script>
<style lang="scss" scoped>
.footer {
  background: #7dbcea;
  min-height: 64px;
}
</style>