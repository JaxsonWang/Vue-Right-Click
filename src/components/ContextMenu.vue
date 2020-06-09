<template>
  <ul
    v-if="visible"
    :style="{
      top: `${contextMenuTop}px`,
      left: `${contextMenuLeft}px`
    }"
    class="context-menu-area"
  >
    <li
      v-for="(item, index) in menuList"
      :key="index"
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
    }
  },
  data() {
    return {}
  },
  watch: {
    visible: {
      handler(value) {
        if (value) {
          document.body.addEventListener('click', this.closeMenu)
        } else {
          document.body.removeEventListener('click', this.closeMenu)
        }
      },
      immediate: true
    }
  },
  methods: {
    closeMenu() {
      this.$emit('close-menu', false)
      this.visible = false
    },
    /**
     * 点击事件 菜单点击事件
     * @param item
     */
    clickAction(item) {
      item.event()
      this.closeMenu()
    }
  }
}
</script>
<style>
</style>
