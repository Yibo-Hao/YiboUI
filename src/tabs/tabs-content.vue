<template>
    <div class="tabs-content">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "yibo-tabs-content",
};
</script>
<style lang="scss" scoped>
    .tabs-content{
        position: relative;
    }
</style>
