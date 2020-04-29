<template>
    <div class="tabs-panel">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"yibo-tabs-panel",
        inject:['eventBus'],
    };
</script>
<style lang="scss"></style>