import { createApp } from 'vue'
import App from '@/App.vue'
import plugins from '@/plugins'
import '@/style.css'

createApp(App).use(plugins).mount('#app')
