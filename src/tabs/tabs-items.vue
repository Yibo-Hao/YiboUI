<template>
  <div
    class="tabs-items"
    @click="changeSelectedItem"
    :class="{ active: this.active }"
  >
    <slot></slot>
    <div class="line" ref="line" :class="{ active: this.active }"></div>
  </div>
</template>
<script>
export default {
  name: "yibo-tabs-items",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    tagName: {
      type: String | Number,
      required: true
    }
  },
  created() {
    this.eventBus.$on("update:selectedTab", name => {
      this.active = name === this.tagName;
    });
  },
  methods: {
    changeSelectedItem() {
      this.eventBus.$emit("update:selectedTab", this.tagName, this);
    }
  }
};
</script>
<style lang="scss" scoped>
$blue: #1890ff;
.tabs-items {
  flex-shrink: 0;
  padding: 0 1.5em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  .line.active {
    position: absolute;
    bottom: 0;
    border-bottom: 1.5px solid $blue;
    width: 100%;
  }
}
</style>
