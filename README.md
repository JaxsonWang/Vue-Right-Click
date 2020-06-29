# Vue-Right-Click

> 高度灵活且简易的右键菜单 Vue.js 指令插件

![截图](https://raw.githubusercontent.com/JaxsonWang/Vue-Right-Click/master/screenshot/vue-right-click.png)

## 安装

在 `Vue-Cli` 项目中你可以这样使用：

```bash
npm install @jaxsonwang/vue-right-click
# or
yarn add @jaxsonwang/vue-right-click
```

全局注入：

```javascript
import VueRightClick from '@jaxsonwang/vue-right-click'

Vue.use(VueRightClick, VueRightClickOptions)
```

然后在需要显示右击菜单注入指令即可：

```html
<template>
  <div id="app" class="demo">
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
```

当然你可以在静态页面使用，只需要引入：

```html
<script src="vue.js"></script><!-- 需要 Vue.js 依赖 -->
<script src="../dist/vue-right-click.umd.js"></script>
```

## API

### 插件选项：

#### menuListClass

- 类型：`String`
- 默认值：`vue-right-click-list`
- 用法：右击弹窗外层菜单列表样式名称

```javascript
Vue.use(VueRightClick, {
  menuListClass: 'app-menu-class'
})
```

#### menuItemClass

- 类型：`String`
- 默认值：`vue-right-click-item`
- 用法：右击弹窗菜单选项样式名称

```javascript
Vue.use(VueRightClick, {
  menuItemClass: 'menu-item-class'
})
```

#### injectBody

- 类型：`Boolean`
- 默认值：`true`
- 用法：右击弹窗自身是否插入至 body 元素上。

```javascript
Vue.use(VueRightClick, {
  injectBody: true
})
```

### 指令选项

#### v-right-click

- 类型：`Array | Function`
- 默认值：`[]`
- 用法：指令的值类型是数组，你可以直接作为数组赋值，推荐使用函数赋值。

数组的对象如下：

```json
{
  "name": "菜单名称",
  "event": "事件名称",
  "callback": "传入事件回调",
  "disable": "菜单状态"
}
```

##### name

- 类型：`String`
- 默认值：`''`
- 用法：显示菜单名称
- 是否必须使用：是

##### event

- 类型：`Function`
- 默认值：`''`
- 用法：点击触发的事件
- 是否必须使用：是

##### callback

- 类型：`Function`
- 默认值：`''`
- 用法：点击菜单需要的回调事件
- 是否必须使用：否

##### disable

- 类型：`Boolean | Function`
- 默认值：`true`
- 用法：是否禁用菜单
- 是否必须使用：否

使用方法请先查看：[test/index.html](./test/index.html) 或者 [src/App.vue](./src/App.vue)

#### 弹窗样式

插件默认不存在弹窗样式，需要自己添加，当然你可以尝试加入下列样式：

```css
  .app-menu-class {
    position: absolute;
    margin: 0;
    background-color: #fff;
    z-index: 1;
    padding: 5px 0;
    list-style-type: none;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    width: 135px;
  }
  .app-menu-class .menu-item-class {
    font-size: 14px;
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
  }
  .app-menu-class .menu-item-class:hover {
    background-color: #eee;
  }
  .app-menu-class .menu-item-class-disable {
    background-color: #eee;
    cursor: auto;
  }
```

## 更新日志

更新日志参考[版本发布](https://github.com/JaxsonWang/Vue-Right-Click/releases)

## License

Vue-Right-Click is open source and released under the MIT License.
