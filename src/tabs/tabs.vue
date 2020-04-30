<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "yibo-tabs",
  data() {
    return {
      eventBus: new Vue()
    };
  },
  props: {
    selectedTab: {
      type: String,
      required: true
    },
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.eventBus.$emit("update:selectedTab", this.selectedTab);
    this.eventBus.$on("update:selectedTab", name => {
      this.$emit("update:selectedTab", name);
    });
    this.$children.forEach(child => {
      if (
        !["yibo-tabs-nav", "yibo-tabs-content"].includes(child.$options.name)
      ) {
        throw "检查你的tabs组件里面是否是nav或者content";
      }
    });
  }
};
</script>
<style lang="scss"></style>
