import SxButton from './src/button';

/* istanbul ignore next */
SxButton.install = function(Vue) {
  Vue.component(SxButton.name, SxButton);
};

export default SxButton;
