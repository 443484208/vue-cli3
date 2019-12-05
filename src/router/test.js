export default [{
		path: '/about',
		name: 'about',
		component: () => import( /* webpackChunkName: "about" */ './../views/About.vue')
	},
	{
		path: '/demo/template',
		name: 'template',
		component: () => import( /* webpackChunkName: "template" */ './../demo/template.vue')
	},
	{
		path: '/demo/father',
		name: 'father',
		component: () => import( /* webpackChunkName: "father" */ './../demo/father.vue')
	},
	{
		path: '/demo/Vuex',
		name: 'Vuex',
		component: () => import( /* webpackChunkName: "Vuex" */ './../demo/Vuex.vue')
	},
	{
		path: '/demo/scss',
		name: 'scss',
		component: () => import( /* webpackChunkName: "scss" */ './../demo/scss.vue')
	}
]
