<template>
  <button class="g-button" :class="{ [iconPosition]: true }">
    <g-icon class="icon" :icon="icon" v-if="!loading"></g-icon>
    <g-icon class="loading icon" :icon="'load'" v-if="loading"></g-icon>
    <div class="slot">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  name:"yibo-button",
  components: {
    "g-icon": Icon
  },
  props: {
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== "left" && value !== "right");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  > .slot {
    order: 2;
  }

  &.right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }

    > .slot {
      order: 1;
    }
  }

  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
