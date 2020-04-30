import { describe, it, afterEach } from "mocha";

import chai from "chai";
import sinon from "sinon";
import Vue from "vue";

import Tabs from "../../src/tabs/tabs";
import TabsNav from "../../src/tabs/tabs-nav";
import TabsItems from "../../src/tabs/tabs-items";
import TabsPanel from "../../src/tabs/tabs-panel";
import TabsContent from "../../src/tabs/tabs-content";
import Input from "../../src/input";

Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-nav", TabsNav);
Vue.component("g-tabs-panel", TabsPanel);
Vue.component("g-tabs-content", TabsContent);
Vue.component("g-tabs-items", TabsItems);

const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs", () => {
  it("Tabs exist", function() {
    expect(Tabs).to.exist;
  });
  it("Tabs 子组件只能是 nav 和 content", function(done) {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
          <g-tabs selected-tab.sync="girl">
      <g-tabs-nav>
        <template v-slot:items>
          <g-tabs-items tagName="vehicle">vehicle</g-tabs-items>
          <g-tabs-items tagName="girl" >girl</g-tabs-items>
          <g-tabs-items tagName="sports">sports</g-tabs-items>
        </template>
        <template v-slot:actions>
          settings
        </template>
      </g-tabs-nav>
      <g-tabs-content>
        <g-tabs-panel tagName="vehicle">vehicle news</g-tabs-panel>
        <g-tabs-panel tagName="girl"> girl news</g-tabs-panel>
        <g-tabs-panel tagName="sports">sports news</g-tabs-panel>
      </g-tabs-content>
    </g-tabs>
      `;
    const Constructor = Vue.extend(Tabs);
    const vm = new Constructor({}).$mount(div);
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(".tabs-items[dataName]='girl'");
      expect(x.classList.contains("active")).to.be.true;
      done();
    });
  });
});
