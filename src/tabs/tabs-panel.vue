<template>
  <transition name="fade" mode="out-in">
    <div class="tabs-panel" v-if="active" :class="{ active: this.active }">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "yibo-tabs-panel",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  created() {
    this.eventBus.$on("update:selectedTab", name => {
      this.active = name === this.tagName;
    });
  },
  props: {
    tagName: {
      type: String | Number,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.active {
  position: absolute;
  top: 0;
  left: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

}
</style>
