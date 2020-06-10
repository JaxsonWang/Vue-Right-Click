<template>
  <div id="app" class="demo">
    <div class="d-flex demo-area demo1">
      <div v-right-click="rcActionDemo1" class="demo-item" />
    </div>
    <div class="d-flex demo-area demo2">
      <div
        v-for="item in demoList"
        :key="item.id"
        v-right-click="rcActionDemo2(item)"
        class="demo-item"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
let i = 0
const demoList = []
while (i < 10) {
  demoList.push({
    id: i,
    name: `area-${i + 1}`
  })
  i++
}

export default {
  name: 'App',
  data() {
    return {
      demoList: demoList,
      rcActionDemo1: [
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
    },
    rcActionDemo2(item) {
      return [
        {
          name: '新增',
          event: (item) => {
            console.log('我执行了新增事件', item)
          },
          callback: item
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "App";

.demo {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0 0.5rem;
  .demo1 {
    margin-top: 1rem;
  }
  .demo2 {
    margin-top: 1rem;
  }
  .demo-area {
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  }
}

.demo-item {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #eee;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .context-menu-area {
    position: absolute;
    margin: 0;
    background: #fff;
    z-index: 1;
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

.d-flex {
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

</style>
