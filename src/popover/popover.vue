<template>
  <div class="popover" @click="pop">
    <div class="content-wrapper" v-if="visible">
      <slot></slot>
    </div>
    <slot name="reference"></slot>
  </div>
</template>
<script>
export default {
    name:"yibo-popover",
  data() {
    return { visible: false };
  },
  methods: {
    pop() {
      this.visible = !this.visible;
    }
  }
};
</script>
<style lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper{
        position: absolute;
        bottom: 100%;
        left: 0;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
    }
}
</style>
