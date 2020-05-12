<template>
  <div class="app">
    <g-collapse>
      <g-collapse-item title="title-1">content1</g-collapse-item>
      <g-collapse-item title="title-2">content2</g-collapse-item>
      <g-collapse-item title="title-3">content3</g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>
export default {
  name: "yibo-app"
};
</script>
<style lang="scss">
@import "src/assets/style/reset.scss";
.app {
  margin: 2em;
  display: flex;
  flex-direction: column;
}
</style>
