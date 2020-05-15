<template>
  <!-- <h2>分类</h2> -->
  <div>
    <crumbs :menuList="menuList"></crumbs>
    <router-view></router-view>
  </div>
</template>

<script>
import Crumbs from 'components/crumbs/Crumbs'
export default {
  name: "Cat",
  components: {
    Crumbs
  },
  data () {
    return {
      menuList: 
        [
          {
          name: "添加",
          path: "/cat/catissue"
          },
          {
          name: "列表",
          path: "/cat/catlists"
          }

        ]
      
    }
  }
};
</script>

<style></style>
