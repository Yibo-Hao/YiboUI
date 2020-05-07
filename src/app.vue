<template>
  <div class="app">
    <g-popover>
        <div>come on</div>
      <g-button slot="reference">click!</g-button>
    </g-popover>
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
