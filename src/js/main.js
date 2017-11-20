// 导入第三方包
import Vue from 'vue';

//导入根组件
import AppComponent from '../component/App.vue';


//渲染根组件，启动项目
new Vue({
    el:'#app',
    render(createNode){
        return createNode(AppComponent);
    }
})

