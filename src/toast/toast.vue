<template>
  <div :class="{ fade: fade }">
    <div class="toast" :class="toastClass" ref="parent">
      <slot v-if="!enableHtml" name="toast"></slot>
      <div v-html="this.$slots.toast" v-if="enableHtml"></div>
      <span class="line" ref="line"></span>
      <span v-if="closeButton" class="close" @click="clickClose">
        {{ closeButton.text }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "yibo-toast",
  computed: {
    toastClass() {
      return { [`${this.position}`]: true };
    }
  },
  props: {
    fade: {
      type: Boolean,
      default: true
    },
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
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "middle", "bottom"].includes(value);
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
    this.$nextTick(() => {
      console.log(this.$refs);
      this.$refs.line.style.height = getComputedStyle(this.$refs.parent).height;
    });
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit("beforeClose");
      this.$destroy();
    },
    clickClose() {
      this.close();
      this.closeButton.callback(this);
    }
  }
};
</script>
<style lang="scss" scoped>
.fade {
  animation: fade 1s linear;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.toast {
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.74);
  position: fixed;
  color: white;
  padding: 0 16px;
  left: 50%;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-height;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .close {
    padding-left: 16px;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  &.top {
    top: 0;
    transform: translateX(-50%);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &.middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.bottom {
    bottom: 0;
    transform: translateX(-50%);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
