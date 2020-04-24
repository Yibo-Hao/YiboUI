<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yibo-row",
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(value) {
        return ["top", "center", "bottom"].includes(value);
      }
    },
    justify: {
      type: String,
      validator(value) {
        return [
          "start",
          "end",
          "center",
          "space-around",
          "space-between"
        ].includes(value);
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      };
    },
    rowClass() {
      let { align } = this;
      let { justify } = this;
      return [align && `align-${align}`,justify && `justify-${justify}`];
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  height: 100px;
  &.align-center {
    align-items: center;
  }
  &.align-top {
    align-items: flex-start;
  }
  &.align-bottom {
    align-items: flex-end;
  }
  &.justify-center {
    justify-content: center;
  }
  &.justify-space-between {
    justify-content: space-between;
  }
  &.justify-space-around {
    justify-content: space-around;
  }
  &.justify-end {
    justify-content: flex-end;
  }
  &.justify-start {
    justify-content: flex-start;
  }
}
</style>
