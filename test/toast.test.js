import { describe, it, afterEach } from "mocha";

import chai from "chai";
import sinon from "sinon";
import Vue from "vue";
import toast from "../src/toast/toast";
import Input from "../src/input";

const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Toast", () => {
  it("接受 autoClose", function(done) {
    let div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(toast);
    const vm = new Constructor({
      propsData: {
        autoClose: true,
        autoCloseDelay: 1
      }
    }).$mount(div);
    vm.$on("beforeClose", () => {
      expect(document.body.contains(vm.$el)).to.eq(false);
      done();
    });
  });
  it("测试 closeButton", function() {
    const callback = sinon.fake();
    const Constructor = Vue.extend(toast);
    const vm = new Constructor({
      propsData: {
        closeButton: {
          text: "wqe",
          callback
        }
      }
    }).$mount();
    expect(vm.$el.querySelector(".close").textContent.trim()).to.eq("wqe");
    vm.$el.querySelector(".close").click();
    expect(callback).to.have.been.called;
  });
  it("接受 enableHtml ", function() {
    const Constructor = Vue.extend(toast);
    const vm = new Constructor({
      propsData: { enableHtml: true }
    });
    vm.$slots.toast = "<strong id='test'>asd</strong>";
    vm.$mount();
    expect(vm.$el.querySelector("#test")).to.exist;
  });
});
