import { PluginObject } from 'vue'

declare const VueRightClick: PluginObject<VueRightClickOptions>

export interface VueRightClickOptions {
  // 菜单弹窗样式
  menuListClass?: string,
  // 子菜单样式
  menuItemClass?: string,
  // 子菜单禁用状态下样式
  menuDisableClass?: string,
  // 弹窗自身是否从 body 元素插入
  injectBody?: boolean
}

export default VueRightClick
