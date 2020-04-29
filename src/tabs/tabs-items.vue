<template>
    <div class="tabs-items" @click="xxx">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"yibo-tabs-items",
        props:{
            disabled:{
                type: Boolean,
                default:false
            },
            tagName:{
                type:String|Number,
                required:true
            }
        },
        inject:['eventBus'],
        created() {
            this.eventBus.$on('update:selected',(name)=>{
                console.log(name);
            })
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.tagName)
            }
        }
    };
</script>
<style lang="scss" scoped>
    .tabs-items{
        flex-shrink: 0;
        padding: 0 1.5em;
    }
</style>