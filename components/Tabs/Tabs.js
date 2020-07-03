// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   * 里面存放的是 要从父组件中接收的数据
   */
  properties: {
    // 要接收的数据的名称
    // aaa: {
    //   // type 要接收的数据的类型
    //   type: String,
    //   // value 默认值
    //   value: ""
    // }
    tabs: {
      type: Array,
      value: []
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   * 1. 页面.js文件中 存放事件回调函数的时候 存放在data同层级下
   * 2. 组件.js文件中 存放事件回调函数的时候 必须要存在methods中
   */
  methods: {
    // 1. 切换tabs
    handleItemTabs(e) {
      /**
       *  1. 绑定点击事件 需要在methods中绑定
          2. 获取被点击的索引
          3. 获取原数组
          4. 对数组循环
            1. 给每个循环性 选中属性 改为false
            2. 给当前的索引的项 太黏激活选中效果
          
          5. 点击事件触发的时候
             触发父组件中的自定义事件 同时传递数据给 父组件
             this.triggerEvent("父组件自定义事件的名称", 要传递的参数)
       */
      // console.log(e);
      // 2. 获取索引
      const {index} = e.currentTarget.dataset;
      // 5. 触发父组件中的自定义事件 同时传递数据给
      this.triggerEvent("itemChange", {index});

      // 3. 获取data中的数组
      // 解构 对复杂类型进行解构的时候 复制了一份 变量的引用而已
      // 最严谨的做法 重新拷贝一份数组 ,再对这个数组的备份进行处理
      // let tabs = JSON.parse(JSON.stringify(this.data.tabs));
      // let {tabs} = this.properties.data;
      // 4. 循环数组
      // [].forEach 遍历数组 遍历数组的时候 修改了v, 也会导致原数组被修改
      // tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);

      // this.setData({
      //   tabs
      // })
      
    }
  }
})
