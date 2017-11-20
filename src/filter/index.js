//导入
import DateFilter from "./date.js";
import JsonFilter from "./json.js";

//暴露
//Vue插件要求提供install方法，这个方法会被注入Vue
//需要我们调用Vue的filter component directive
export default {
    install(Vue){
        Vue.filter('date',DateFilter);
        Vue.filter('json',JsonFilter)
    }
}