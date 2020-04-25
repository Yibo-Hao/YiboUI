import Vue from "vue";
import App from "./app.vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";
import Layout from "./layout/layout"
import Side from "./layout/side"
import Content from "./layout/content"
import Header from "./layout/header"
import Footer from "./layout/footer"


Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-layout", Layout);
Vue.component("g-header", Header);
Vue.component("g-footer", Footer);
Vue.component("g-content", Content);
Vue.component("g-side", Side);


new Vue({
  el: "#app",
  render: h => h(App)
});

