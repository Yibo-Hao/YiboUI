<template>
  <div class="tabs-panel" v-if="active" :class="{active:this.active}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "yibo-tabs-panel",
  inject: ["eventBus"],
    data(){
      return{
          active:false
      }
    },
  created() {
    this.eventBus.$on("update:selectedTab", (name)=>{
        this.active = name === this.tagName;
    });
  },
  props: {
    tagName: {
      type: String | Number,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
  .active{
    background: red;
  }
</style>
