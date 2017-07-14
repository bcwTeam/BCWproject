import Vue from 'vue' 
import Router from 'vue-router'


Vue.use(Router)

import Home from '../pages/home/home'
import Class from '../pages/class/class'
import Eat from '../pages/eat/eat.vue'
import Cart from '../pages/cart/cart'
import Mine from '../pages/mine/mine'

import Bogof from '../pages/home/bogof'
import Candy from '../pages/home/candy'
import Driedtofu from '../pages/home/driedtofu'
import Import from '../pages/home/import'
import Nut from '../pages/home/nut'
import Recommend from '../pages/home/recommend'
import Seafood from '../pages/home/seafood'
import Sweetmeat from '../pages/home/sweetmeat'

import Choose from '../pages/eat/choose'
import Dalay from '../pages/eat/dalay'
import Knowledge from '../pages/eat/knowledge'

import Detail from '../components/eat/detail'
import DetailClassify from '../components/class/detail'

import Member_center from '../pages/home/member_center'
import Daily_sign from '../components/home/daily_sign'
import Dou_shop from '../components/home/dou_shop'
import Postage from '../components/home/postage'
export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
		 	component: Home,
		},
    	{
			path: '/home',
			name: 'home',
		 	component: Home,
		 	children: [
		 		{ path: '/', name: 'bogof', component: Bogof },
		 		{ path: '/candy', name: 'candy', component: Candy },
		 		{ path: '/driedtofu', name: 'driedtofu', component: Driedtofu },
		 		{ path: '/import', name: 'import', component: Import },
		 		{ path: '/nut', name: 'nut', component: Nut },
		 		{ path: '/recommend', name: 'recommend', component: Recommend },
		 		{ path: '/seafood', name: 'seafood', component: Seafood },
		 		{ path: '/sweetmeat', name: 'sweetmeat', component: Sweetmeat },
		 	]
		},
		{
			path: '/class',
			name: 'class',
		 	component: Class,
		},
		{
			path: '/eat',
			name: 'eat',
		 	component: Eat
		},
		{
			path: '/cart',
			name: 'cart',
		 	component: Cart,
		},
		{
			path: '/mine',
			name: 'mine',
		 	component: Mine,
		},
		{
	        path: '/detail',
			name: 'Detail',
		 	component: Detail,
	    },
	    {
	        path: '/member_center',
			name: 'Member_center',
		 	component: Member_center,
	    },
	    {
	        path: '/daily_sign',
			name: 'Daily_sign',
		 	component: Daily_sign,
		 },
		 {
	        path: '/detailclassify',
			name: 'DetailClassify',
		 	component: DetailClassify,
<<<<<<< HEAD

=======
>>>>>>> 90b6dfa6c186028860e1a95547596f827c062e9a
	    },
	     {
	        path: '/dou_shop',
			name: 'Dou_shop',
		 	component: Dou_shop,
	    },
	     {
	        path: '/postage',
			name: 'Postage',
		 	component: Postage,
	    },

	]
})
