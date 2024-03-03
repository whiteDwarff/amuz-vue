import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
		return { top: 0 };
	},
})

export default router
