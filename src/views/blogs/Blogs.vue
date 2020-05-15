<template>
<div>
 
  <crumbs :menuList = menuList></crumbs>
  <router-view></router-view>

</div>
 

</template>

<script>
import Crumbs from 'components/crumbs/Crumbs'

export default {
  name: "Blogs",
  components: {
   Crumbs
  },
  data () {
    return {
      menuList:
      [    
        {
          name: "发布",
          path: "/blogs/blogissue"
        },
        {
          name: "列表",
          path: "/blogs/bloglists"
        }
      
       ]
    }
  },
  methods: {
    issueClick(event) {
      // console.log("点击");
       var el = event.currentTarget;
      //获取path的值 
      //console.log(el.getAttribute("path"));
      this.$router.push(el.getAttribute("path"))
    }
  }
}
</script>

<style>

</style>