import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import  VueAwesomeSwiper from  'vue-awesome-swiper/dist/ssr'
Vue.use(VueAwesomeSwiper)


import layer from 'vue-layer';
import 'vue-layer/lib/vue-layer.css';
Vue.prototype.$layer = layer(Vue);
