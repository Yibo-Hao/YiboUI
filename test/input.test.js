import { describe, it, afterEach } from "mocha";

import chai from "chai";
import sinon from "sinon";
import Vue from "vue";
import Input from "../src/input";

const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Input", () => {
  it("存在", () => expect(Input).to.be.ok);

  describe("props", () => {
    it("接收value ", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          value: "1234"
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.value).to.equal("1234");
      vm.$destroy();
    });
    it("接收disabled", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.disabled).to.equal(true);
      vm.$destroy();
    });
    it("接收readonly", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.readOnly).to.equal(true);
      vm.$destroy();
    });
    it("接收error", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          error: "你错了"
        }
      }).$mount();
      const useElement = vm.$el.querySelector("use");
      expect(useElement.getAttribute("xlink:href")).to.equal("#i-error");
      const errormessage = vm.$el.querySelector(".errorMessage");
      expect(errormessage.innerText).to.equal("你错了");
      vm.$destroy();
    });
  });
  describe("事件", () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy();
    });
    it("支持事件", () => {
      ["change", "input", "focus", "blur"].forEach(eventName => {
        vm = new Constructor({}).$mount();
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        let event = new Event(eventName);
        let inputElement = vm.$el.querySelector("input");
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith(event);
      });
    });
  });
});
