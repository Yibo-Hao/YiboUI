import Toast from "./toast";

function createToast({ Vue, message, toastoptions }) {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({
    propsData: toastoptions
  });
  toast.$slots.default = [message];
  toast.$mount();
  document.body.appendChild(toast.$el);
  return toast
}

let currentToast;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastoptions) {
      if (currentToast){
        currentToast.close()
      }
      currentToast = createToast({Vue,message,toastoptions})
    };
  }
};
