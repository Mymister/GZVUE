<template>
<header>
    <mt-header fixed title="江买卖">
        <!-- 返回按钮只在非首页出现 -->
            <!-- 通过$route.path拿到当前路径比较 -->
            <!-- 通过$router.go(-1)方法实现页面返回功能 -->
        <mt-button v-if="$route.path != '/index'" v-on:click="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>
    <i></i>
</header>
    
</template>

<script>
export default {};
</script>

<style scoped>
header i {
  display: block;
  height: 40px;
}
</style>
