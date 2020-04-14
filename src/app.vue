<template>
  <div class="app">
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

    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
  </div>
</template>
<script>
export default {
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
}
</style>
