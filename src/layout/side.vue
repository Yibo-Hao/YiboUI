<template>
  <div class="side">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "yibo-side"
};
</script>
<style lang="scss" scoped>
.side {
  background: #3ba0e9;
  min-height: 120px;
  min-width: 200px;
}
</style>
