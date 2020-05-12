<template>
  <div class="collapseitem">
    <div class="title" @click="toggle">{{ title }}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "yibo-collapse-item",
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  inject: ["eventBus"],
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus.$emit("update:addSelected", this.name);
      }
    }
  },
  mounted() {
      this.eventBus.$on("update:selected", names => {
        this.open = names.indexOf(this.name) >= 0;
      });
  },
  data() {
    return {
      open: false
    };
  }
};
</script>
<style lang="scss" scoped>
.collapseitem {
  > .title {
    border-top: 1px solid #ddd;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    color: #303133;
    cursor: pointer;
  }
}
</style>
