<template>
  <div class="tabs-items" @click="changeSelectedItem" 
       :class="{active:this.active}">
    <slot></slot>
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
      this.eventBus.$emit("update:selectedTab", this.tagName);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-items {
  flex-shrink: 0;
  padding: 0 1.5em;
  border: 1px solid red;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active{
    background: red;
  }
}
</style>
