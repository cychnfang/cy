import type { App, Plugin } from 'vue'
import router from '@/router'

type PluginConfig = {
  plugin: Plugin
  options?: unknown
}

// 插件列表
const plugins: PluginConfig[] = [{ plugin: router }]

export default (vueInstance: App) => {
  plugins.forEach(({ plugin, options }) => vueInstance.use(plugin, options))
}
