<template>
<!-- <article>
    <app-header></app-header>
    <div class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left">返回</a>
			<h1 class="mui-title">图文资讯</h1>
	</div> 
   <ul class="mui-table-view">
         <li class="mui-table-view-cell mui-media" v-for="item in newsList" v-bind:key="item.id" >
          <router-link v-bind="{to:`/news/detail/${item.id}`}" >
            <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
            <div class="mui-media-body">
                <p class="mui-ellipsis">{{item.zhaiyao}}</p>
                <p class="data-left">发布时间：{{item.add_time|Data}}</p>
                <p class="click-right">点击：{{item.click}}</p>
            </div>
          </router-link>
      </li>
	</ul>
</article> -->
<ul>
        <li v-for="item in newsList" v-bind:key="item.id">
            <router-link v-bind="{ to: `/news/detail/${item.id}` }">
                <p>{{ item.zhaiyao }}</p>
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return{
                newsList:[]
            }
        },
        //  filters: {
        //     Data(time){
        //     var date = new Date(time);
        //     return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`;
        //     }
        // },
        methods:{
            getNewsList(){
                this.axios.get(this.api.getNL)
                .then(rep => this.newsList =rep.data.message )
            }
        },

        created(){
           this.getNewsList(); 
        }

    }
</script>

<style scoped>
 
</style>