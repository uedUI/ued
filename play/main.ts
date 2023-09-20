import { createApp } from 'vue'
import App from './app.vue'
import router from './router'

const app = createApp(App)
app
	// TODO: ts类型限制报错，后续弄清原因，暂用any
	.use(router as any)
	.mount('#app')
