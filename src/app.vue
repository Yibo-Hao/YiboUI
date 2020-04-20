<template>
  <div class="app">
    <div>
      <g-button
        :icon="'setting'"
        :icon-position="'left'"
        :loading="loading1"
        @click.native="loading1 = !loading1"
      >
        设置
      </g-button>
      <g-button
        :icon="'setting'"
        :icon-position="'right'"
        :loading="loading2"
        @click.native="loading2 = !loading2"
      >
        设置
      </g-button>
      <g-button :loading="loading3" @click.native="loading3 = !loading3">
        设置
      </g-button>
    </div>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <div>
      <g-input value="xxx"></g-input>
      <g-input value="xxx" error="名字不少于两个字"></g-input>
      <g-input value="xxx" :disabled="true"></g-input>
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
      loading3: false
    };
  }
};
</script>
<style lang="scss">
@import "src/assets/style/reset.scss";

.app {
  margin: 2em;
  display: flex;
  flex-direction: column;
  >div{
    margin: 1em;
  }
}
</style>
