import Vue from "vue";
import App from './app.vue'
import Button from "./button";

Vue.component('g-button',Button);

new Vue({
    el:'#app',
    render:h=>h(App)
});