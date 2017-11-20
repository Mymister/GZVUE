//导入第三方包
import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import Common from '../component/common';// 自动找到index.js引入

//启用vue插件
Vue.use(MintUi);
Vue.use(Common);

//导入根组件
import AppComponent from '../component/App.vue'

// 渲染根组件, 启动项目
new Vue({
    el:'#app',
    render(createNode){
        return createNode(AppComponent);
    }
})