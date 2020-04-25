import Vue from "../node_modules/vue/dist/vue.esm.js";
import Col from "../src/grid/col";

import { describe, it } from "mocha";
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Col", () => {
  it("存在", () => expect(Col).to.exist);
  it("接受span", function() {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        span: "22"
      }
    }).$mount(div);
    expect(Array.from(vm.$el.classList).includes("col-22")).to.eq(true);
    vm.$el.remove();
    vm.$destroy();
  });
  it("接受offset", function() {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        offset: "22"
      }
    }).$mount(div);
    expect(Array.from(vm.$el.classList).includes("offset-22")).to.eq(true);
    vm.$el.remove();
    vm.$destroy();
  });
  it("接受 pc-offset", function() {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        pc: {offset:2}
      }
    }).$mount(div);
    expect(Array.from(vm.$el.classList).includes("offset-pc-2")).to.eq(true);
    vm.$el.remove();
    vm.$destroy();
  });
});
