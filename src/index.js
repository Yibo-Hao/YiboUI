import Vue from "vue";
import App from "./app.vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";
import Popover from "./popover/popover";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-popover", Popover);
new Vue({
  el: "#app",
  render: h => h(App)
});
