import Vue from "vue";
import App from "./app.vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";
import Collapse from "./collapse/collapse";
import CollapseItem from "./collapse/collapse-item";
import toastplugin from "./toast/toastplugin";
Vue.use(toastplugin);
import Popover from "./popover/popover";
import Tabs from "./tabs/tabs";
import TabsNav from "./tabs/tabs-nav";
import TabsItems from "./tabs/tabs-items";
import TabsPanel from "./tabs/tabs-panel";
import TabsContent from "./tabs/tabs-content";
import Row from './grid/row'
import Col from './grid/col'


Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-collapse", Collapse);
Vue.component("g-collapse-item", CollapseItem);
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-nav", TabsNav);
Vue.component("g-tabs-panel", TabsPanel);
Vue.component("g-tabs-content", TabsContent);
Vue.component("g-tabs-items", TabsItems);
Vue.component("g-popover", Popover);
Vue.component("g-row", Row);
Vue.component("g-col", Col);

new Vue({
  el: "#app",
  render: h => h(App)
});
