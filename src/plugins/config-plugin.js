import config from "./../config"

const ConfigPlugin = {
    install(Vue, options) {
        Vue.prototype.$config = config
    }
};

export default ConfigPlugin;