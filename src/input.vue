<template>
  <div class="wrapper" :class="{error}">
    <label>
      <input :value="value"
              type="text"
             :disabled="disabled"/>
    </label>
    <g-icon icon="error" v-if="error"></g-icon>
    <span v-if="error">{{error}}</span>
  </div>
</template>
<script>
export default {
  name: "yibo-input",
  props: {
    value: {
      type: String
    },
    disabled:{
      type:Boolean,
      default:false
    },
    readonly:{
      type:Boolean,
      default:false
    },
    error:{
      type:String,
      default:''
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/style/helper";
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  :not(:last-child){margin-right: 0.5em}
  &.error{
    input{
      border-color: $red;
    }
  }
  input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
      outline: none;
    }
    &[disabled],&[readonly]{
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
}
</style>
