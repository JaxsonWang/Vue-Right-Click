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
      :class="pluginOptions.menuItemClass"
      class="context-menu-item"
      @click.prevent.stop="clickAction(item)"
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
      item.callback === undefined ? item.event() : item.event(item.callback)
      this.closeMenu()
    }
  }
}
</script>
