//导入第三方包
import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import Common from '../component/common';//自动引入index.js
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';
import axios from 'axios';
import VueRouter from 'vue-router';
import Filter from '../filter' ;
import '../less/index.less';
import VuePP from 'vue-picture-preview';
import Vuex from 'vuex';


//启用VUE插件
Vue.use(MintUi);
Vue.use(Common);
Vue.use(VueRouter);
Vue.use(Filter);
Vue.use(VuePP);
Vue.use(Vuex);


// 2.2 导入配置
import routerConfig from '../router' // 自动找到index.js引入
import apiConfig from './api_config.js'
import store from '../vuex'

// 2.3 扩展实例成员
Vue.prototype.axios = axios; // 把axios库放置到原型,其他组件直接可以拿到axios对象
Vue.prototype.api=apiConfig;

//导入根组件
import AppComponent from '../component/App.vue';

//渲染组件，启动项目
new Vue({
    el:'#app',
    render(createNode){
        return createNode(AppComponent);
    },
    router:new VueRouter(routerConfig),
    store:new Vuex.Store(store)
})