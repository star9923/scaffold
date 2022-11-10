export const home = [
	{
		path: '/',
		redirct: '/home',
		meta: { title: '首页' },
		component: () => import('@/views/Home/index.vue')
	}
]