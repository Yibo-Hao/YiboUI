import Vue from "../node_modules/vue/dist/vue.esm.js";
import Row from "../src/grid/row";
import Col from "../src/grid/col";

import { describe, it } from "mocha";
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Row", () => {
  it("存在", () => expect(Row).to.exist);
  it("接受gutter", function(done) {
    Vue.component("g-row", Row);
    Vue.component("g-col", Col);
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
    <g-row gutter="20"> 
        <g-col></g-col> 
        <g-col></g-col> 
    </g-row>`;
    const vm = new Vue({
      el: div
    });
    setTimeout(() => {
      const row = vm.$el.querySelector(".row");
      expect(getComputedStyle(row).marginRight).to.eq("-10px");
      expect(getComputedStyle(row).marginLeft).to.eq("-10px");
      const cols = vm.$el.querySelectorAll(".col");
      expect(getComputedStyle(cols[0]).paddingRight).to.eq("10px");
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq("10px");
      done();
      vm.$el.remove();
      vm.$destroy();
    }, 0);
  });
  it("接受align", function() {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Row);
    const vm = new Constructor({
      propsData: {
        align: "bottom"
      }
    }).$mount(div);
    const element = vm.$el;
    expect(getComputedStyle(element).alignItems).to.eq("flex-end");
    vm.$el.remove();
    vm.$destroy();
  });
  it("接受justify", function() {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Row);
    const vm = new Constructor({
      propsData: {
        justify: "space-between"
      }
    }).$mount(div);
    const element = vm.$el;
    expect(getComputedStyle(element).justifyContent).to.eq("space-between");
    vm.$el.remove();
    vm.$destroy();
  });
});
