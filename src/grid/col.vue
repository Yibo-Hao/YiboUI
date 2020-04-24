<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div class="in">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "yibo-col",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: {
      type: Object,
      validator(value) {
        let valid = true;
        let keys = Object.keys(value);
        keys.forEach(key => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      }
    },
    narrowPc: {
      type: Object,
      validator(value) {
        let valid = true;
        let keys = Object.keys(value);
        keys.forEach(key => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      }
    },
    pc: {
      type: Object,
      validator(value) {
        let valid = true;
        let keys = Object.keys(value);
        keys.forEach(key => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      }
    },
    widePc: {
      type: Object,
      validator(value) {
        let valid = true;
        let keys = Object.keys(value);
        keys.forEach(key => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      }
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  methods:{
    classAdd(spanAndOffset, prefix = ""){
      let array = [];
      spanAndOffset &&
      spanAndOffset.span &&
      array.push(`col-${prefix}${spanAndOffset.span}`);
      spanAndOffset &&
      spanAndOffset.offset &&
      array.push(`offset-${prefix}${spanAndOffset.offset}`);
      return array;
    }
  },
  computed: {
    colClass() {
      let { span, offset, ipad, narrowPc, pc, widePc,classAdd } = this;
      return [
        ...classAdd({ span, offset }),
        ...classAdd(ipad, "ipad-"),
        ...classAdd(narrowPc, "narrow-pc-"),
        ...classAdd(pc, "pc-"),
        ...classAdd(widePc, "wide-pc-")
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  width: 100%;
  $class-prefix: col-;
  .in {
    border: 1px solid red;
  }
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>
