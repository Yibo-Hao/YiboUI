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
      <g-input v-model="message"></g-input>
      <g-input v-model="message" error="名字不少于两个字"></g-input>
      <g-input v-model="message" :disabled="true"></g-input>

    </div>
    <div class="grid" style="border: 1px solid black">
      <g-row gutter="20" align="center" justify="center">
        <g-col span="10" :ipad="{span:2}">1</g-col>
        <g-col span="8">1</g-col>
      </g-row>
      <g-row gutter="20">
        <g-col>1</g-col>
        <g-col>1</g-col>
      </g-row>

    </div>
    <div class="app-layout">
      <g-layout>
        <g-header><div class="header">header</div></g-header>
        <g-layout>
          <g-side><div class="side">side</div></g-side>
          <g-content><div class="content">content</div></g-content>
        </g-layout>
        <g-footer><div class="footer">footer</div></g-footer>
      </g-layout>
    </div>
  </div>
</template>
<script>
export default {
  name: "yibo-app",
};
</script>
<style lang="scss">
@import "src/assets/style/reset.scss";
.app {
  display: flex;
  flex-direction: column;
}
<<<<<<< HEAD

=======
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.side {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
>>>>>>> 布局美化完成
</style>
