import Vue from 'vue'

// import 'swiper/swiper-bundle.css'
// import  VueAwesomeSwiper from  'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)



import layer from 'vue-layer';
import 'vue-layer/lib/vue-layer.css';

Vue.prototype.$layer = layer(Vue);
