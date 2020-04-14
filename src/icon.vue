<template>
    <svg v-if="icon in icons" class="icon">
        <use :xlink:href="'#i-'+icon"></use>
    </svg>
</template>
<script>
    // import 'src/assets/icons/down.svg'
    // import 'src/assets/icons/download.svg'
    // import 'src/assets/icons/right.svg'
    // import 'src/assets/icons/left.svg'
    // import 'src/assets/icons/like.svg'
    // import 'src/assets/icons/setting.svg'

    export default {
        data: function () {
            return {
                icons: {
                    down: "down",
                    setting:"setting",
                    download:"download",
                    right:"right",
                    left:"left",
                    like:"like",
                    loading:"loading"
                }
            }
        },
        props: ['icon']
    }
</script>
<style lang="scss" scoped>
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>