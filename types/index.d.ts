import { PluginObject } from 'vue'

declare const VueRightClick: PluginObject<VueRightClickOptions>

export interface VueRightClickOptions {
  menuListClass?: string,
  menuItemClass?: string
}

export default VueRightClick
