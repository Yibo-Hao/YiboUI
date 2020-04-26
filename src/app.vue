<template>
  <div class="app">
    <div class="toast">
      <button @click="toast">click!</button>
    </div>
  </div>
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
  methods:{
    toast(){
      this.$toast("toast!!!")
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
  > div {
    margin: 1em;
  }
}
</style>
