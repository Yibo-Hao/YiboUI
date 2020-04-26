<template>
  <div class="app"></div>
</template>
<script>
export default {
  name: "yibo-app",
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      message: "hi"
    };
  },
  methods: {
    toast() {
      this.$toast("toast!!!",{position:"middle"});
    }
  }
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
