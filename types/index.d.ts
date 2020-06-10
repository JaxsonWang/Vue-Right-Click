import { PluginObject } from 'vue'

declare const VueRightClick: PluginObject<VueRightClickOptions>

export interface VueRightClickOptions {
  menuClass?: string
}

export default VueRightClick
