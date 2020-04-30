<template>
  <div
    class="tabs-items"
    @click="changeSelectedItem"
    :class="{ active: this.active,disabled:this.disabled }"
  >
    <slot></slot>
  </div>
</template>
<script>
import tabsBar from "./tabs-bar";
export default {
  components: {
    "g-tab-bar": tabsBar
  },
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
      if (!this.disabled) {
        this.eventBus.$emit("update:selectedTab", this.tagName, this);
      }
    }
  },
  watch: {
    active: function(val) {
      if (val) {
        this.eventBus.$emit("activeVm", this);
      }
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
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled{
    color: grey;
    cursor: not-allowed;
  }
}
</style>
