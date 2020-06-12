import ContextMenu from './components/ContextMenu'

export const install = (Vue, constructorOptions) => {
  // 获取插件选项
  const globalOptions = Object.assign({}, {
    menuListClass: 'vue-right-click-list',
    menuItemClass: 'vue-right-click-item'
  }, constructorOptions)

  Vue.directive('right-click', {
    /**
     * 文档地址：https://cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0
     * 因为右击菜单出现是非必要元素，这边使用 inserted 钩子函数，提高插件性能
     * @param el 指令所绑定的元素，可以用来直接操作 DOM
     * @param binding 绑定元素属性对象集合
     * @param vnode Vue 编译生成的虚拟节点
     * @param oldVnode 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
     */
    inserted: (el, binding, vnode, oldVnode) => {
      /**
       * 监听鼠标右键
       * @param event 鼠标原生事件
       */
      el.oncontextmenu = event => {
        // 阻止事件
        event.preventDefault()
        if (!vnode.context['hasContextMenu']) {
          // 赋值状态
          vnode.context['hasContextMenu'] = true
          // 生成右击菜单界面
          const ContextMenuNode = Vue.extend(ContextMenu)
          const node = document.body.appendChild(document.createElement('div'))
          // 计算点击位置
          // todo 自适应弹窗位置
          const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
          const scrollY = document.documentElement.scrollTop || document.body.scrollTop
          const rightClickHeaderRowLeft = event.pageX || event.clientX + scrollX
          const rightClickHeaderRowTop = event.pageY || event.clientY + scrollY

          // 调用组件
          const contextMenuNode = new ContextMenuNode({
            propsData: {
              visible: true,
              contextMenuTop: rightClickHeaderRowTop,
              contextMenuLeft: rightClickHeaderRowLeft,
              menuList: typeof binding.value === 'function' ? binding.value() : binding.value,
              pluginOptions: globalOptions
            }
          }).$mount(node)

          // 监听组件触发事件执行回调事件
          contextMenuNode.$on('close-menu', value => {
            // 监听关闭并且赋值
            vnode.context['hasContextMenu'] = value
          })
        }
      }
    }
  })
}

if (window.Vue) window.Vue.use(install)

export default install
