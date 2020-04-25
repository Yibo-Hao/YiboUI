<template>
  <div class="content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "yibo-content"
};
</script>
<style lang="scss" scoped>
.content {
  flex-grow: 1;
  background: #108ee9;
  min-height: 120px;
}
</style>
