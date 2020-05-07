<template>
  <div class="app">
    <g-tabs :selected-tab.sync="selectedTab">
      <g-tabs-nav>
        <template v-slot:items>
          <g-tabs-items tagName="vehicle">vehicle</g-tabs-items>
          <g-tabs-items tagName="girl">girl</g-tabs-items>
          <g-tabs-items tagName="sports">sports</g-tabs-items>
        </template>
        <template v-slot:actions>
          <g-button>setting</g-button>
        </template>
      </g-tabs-nav>
      <g-tabs-content>
        <g-tabs-panel tagName="vehicle">vehicle news</g-tabs-panel>
        <g-tabs-panel tagName="girl"> girl news</g-tabs-panel>
        <g-tabs-panel tagName="sports">sports news</g-tabs-panel>
      </g-tabs-content>
    </g-tabs>
    <g-popover>
      <div>come on</div>
      <g-button slot="reference">click!</g-button>
    </g-popover>
  </div>
</template>
<script>
export default {
  name: "yibo-app",
  data() {
    return {
      selectedTab: "vehicle"
    };
  },
  methods: {
    toast() {
      this.$toast("toast!!!", { position: "top" });
    }
  }
};
</script>
<style lang="scss">
@import "src/assets/style/reset.scss";
.app {
  display: flex;
  flex-direction: column;
}

</style>
