import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import '@/css/index.scss'
import 'element-plus/packages/theme-chalk/src/index.scss'
import App from './App.vue';
import router from '@/routes'
import store from '@/store'
const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')