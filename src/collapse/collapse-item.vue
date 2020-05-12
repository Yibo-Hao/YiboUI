<template>
  <div class="collapseitem">
    <div class="title" @click="open = !open">{{ title }}</div>
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
    }
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
