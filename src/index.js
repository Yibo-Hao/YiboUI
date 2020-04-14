import Vue from "vue";
import App from './app.vue'
import Button from "./button";
import Icon from './icon'

Vue.component('g-button',Button);
Vue.component('Icon',Icon);

new Vue({
    el:'#app',
    render:h=>h(App)
});