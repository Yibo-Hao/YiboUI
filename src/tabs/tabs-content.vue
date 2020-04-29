<template>
    <div class="tabs-content">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "yibo-tabs-content",
    inject:['eventBus'],
};
</script>
<style lang="scss"></style>
