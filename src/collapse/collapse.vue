<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "yibo-collapse"
};
</script>
<style lang="scss" scoped>
.collapse {
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 4px;
  .collapseitem {
    &:last-child {
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>
