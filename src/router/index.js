import HomeComponent from "../component/home/home.vue";
import NewsListComponent from "../component/news/news_list.vue";
import NewsDetailComponent from "../component/news/news_detail.vue";

export default{
    routes:[
        //首页配置路由
        {path:"/",redirect:"/index"},
        {name:'i',path:'/index',component:HomeComponent},

        // 新闻路由配置
        {name:'nl',path:'/news/list',component:NewsListComponent},
        {name:'nd',path:'/news/detail/:id',component:NewsDetailComponent}
    ]
}