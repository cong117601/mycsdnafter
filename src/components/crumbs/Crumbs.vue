<!-- 二级导航 面包屑 -->
<template>
  <div>
    <!-- <h2>面包屑</h2> -->
    <div class="ui attached pointing menu">
      <div class="ui container">
        <div class="right menu">
          <!-- <a href="#" class="item" @click="issueClick" path="/blogs/issue">发布</a>
        <a href="#" class="teal active item" @click="issueClick" path="/blogs/lists" >列表</a> -->
          <router-link
            tag="a"
            v-for="(item, index) in menuList"
            :to="item.path"
            :key="index"
            class="item"
            :class="{ active: $route.path == item.path }"
            >{{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Crumbs",
  data() {
    return {};
  },
  props: {
    menuList: {
      trype: Array,
      default: function() {
        return [];
      },
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
      a: console.log("+++++++++"+this.menuList);
      
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
      a: console.log(this.menuList);
      
  },
  
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
