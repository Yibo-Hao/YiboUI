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
    direction: {
      type: String,
      default: "row",
      validator(value) {
        return ["row", "column"].includes(value);
      }
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.eventBus.$emit("update:selectedTab", this.selectedTab);
    this.eventBus.$on("update:selectedTab", (name)=>{
      this.$emit("update:selectedTab", name)
    });

  }
};
</script>
<style lang="scss"></style>
