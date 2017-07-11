// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
<<<<<<< HEAD
import VueAwesomeSwiper from 'vue-awesome-swiper'
import lazyload from "vue-lazyload"
=======
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import Lazyload from "vue-lazyload-img"
>>>>>>> c0b12497b786d28f2404e61161e0c725e3fb2df6

// Vue.use(VueAwesomeSwiper)

<<<<<<< HEAD
Vue.use(lazyload,{
	preLoad : 1.3,
	listenEvents: [ 'scroll' ]
})

=======
// Vue.use(lazyload)
>>>>>>> c0b12497b786d28f2404e61161e0c725e3fb2df6

Vue.config.productionTip = false

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
