<template>
  <ul
    v-if="visible"
    :style="{
      top: `${contextMenuTop}px`,
      left: `${contextMenuLeft}px`
    }"
    :class="pluginOptions.menuListClass"
    class="context-menu-area"
  >
    <li
      v-for="(item, index) in menuList"
      :key="index"
      :class="[pluginOptions.menuItemClass, disableAction(item)]"
      class="context-menu-item"
      @click.prevent.stop="disableAction(item) === false ? clickAction(item) : false"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'ContextMenu',
  props: {
    visible: {
      require: true,
      type: Boolean,
      default: false
    },
    contextMenuTop: {
      require: true,
      type: Number,
      default: 0
    },
    contextMenuLeft: {
      require: true,
      type: Number,
      default: 0
    },
    menuList: {
      require: false,
      type: Array,
      default: () => {
        return []
      }
    },
    pluginOptions: {
      require: true,
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  watch: {
    visible: {
      handler(value) {
        value ? document.body.addEventListener('click', this.closeMenu) : document.body.removeEventListener('click', this.closeMenu)
      },
      immediate: true
    }
  },
  methods: {
    /**
     * 关闭弹窗
     */
    closeMenu() {
      this.$emit('close-menu', false)
      this.visible = false
    },
    /**
     * 点击事件 菜单点击事件
     * @param item
     */
    clickAction(item) {
      // 传入回调参数
      if (typeof item.event === 'function') {
        item.callback === undefined ? item.event() : item.event(item.callback)
      }
      this.closeMenu()
    },
    /**
     * 菜单禁用
     * @param item
     * @return string 返回样式
     */
    disableAction(item) {
      return typeof item.disable === 'function' ? item.disable(item.callback) ? this.pluginOptions.menuDisableClass : false : item.disable ? this.pluginOptions.menuDisableClass : false
    }
  }
}
</script>
