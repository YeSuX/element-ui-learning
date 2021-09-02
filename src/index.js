import Button from '../packages/button/index.js'; 
import Row from '../packages/row/index'

const components = [
  Button,
  Row,
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Row,
}