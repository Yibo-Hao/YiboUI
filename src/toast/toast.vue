<template>
  <div class="toast">
    <slot></slot>
    <span class="line"></span>
    <span v-if="closeButton" class="close"
    @click="clickClose"
    > {{ closeButton.text }}</span>
  </div>
</template>
<script>
export default {
  name: "yibo-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 2
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "close",
          callback(toast) {
            toast.close();
          }
        };
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    clickClose(){
      this.closeButton.callback(this)
    }
  }
};
</script>
<style lang="scss" scoped>
.toast {
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.74);
  position: fixed;
  color: white;
  padding: 0 16px;
  top: 0;
  left: 50%;
  transition: translateX(-50%);
  font-size: $font-size;
  line-height: 1.8;
  height: $toast-height;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .close{
    padding-left: 16px;
  }
  .line{
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>
