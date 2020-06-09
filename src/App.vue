<template>
  <div id="app" class="demo">
    <div v-right-click="rcAction" class="demo-item" />
    <div v-right-click="rcAction" class="demo-item" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      rcAction: [
        {
          name: '新增',
          event: () => {
            console.log('我执行了新增事件')
          }
        },
        {
          name: '删除',
          event: this.deleteAction
        }
      ]
    }
  },
  methods: {
    deleteAction() {
      console.log('我执行删除事件')
    }
  }
}
</script>

<style lang="scss">
.demo {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  .demo-item {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: #eee;
    margin: 20px;
    .context-menu-area {
      position: absolute;
      margin: 0;
      background: #fff;
      z-index: 3000;
      padding: 5px 0;
      list-style-type: none;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 400;
      color: #333;
      box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
      width: 135px;
      .context-menu-item {
        font-size: 14px;
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
      }
    }
  }
}
</style>
