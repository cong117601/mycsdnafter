<template>
  <div>
    <nav class="ui inverted attached segment m-padded-tb-mini m-shadow-small">
      <div class="ui container">
        <div class="ui inverted secondary stackable menu">
          <h2 class="ui teal header item">管理后台</h2>
          <a
            href="#"
            @click="navBarClick"
            path="/blogs"
            :class="{ active: this.$route.path.indexOf('/blogs') !==-1 }"
            class="m-item item "
          >
            <i class="mini home icon"></i>博客</a
          >
          <a
            href="#"
            @click="navBarClick"
            path="/cat"
            :class="{ active:  this.$route.path.indexOf('/cat') !==-1  }"
            class=" m-item item "
          >
            <i class="mini idea icon"></i>分类</a
          >
          <a
            href="#"
            @click="navBarClick"
            path="/tag"
            :class="{ active: this.$route.path.indexOf('/tag') !==-1 }"
            class="m-item item "
          >
            <i class="mini tags icon"></i>标签</a
          >
          <div class="right m-item menu">
            <div class="ui dropdown  item">
              <div class="text">
                <img class="ui avatar image" src="assets/img/2.jpg" />
                admin
              </div>
              <i class="dropdown icon"></i>
              <div class="menu">
                <a href="#" class="item">退出登陆</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <a
        href="#"
        class="ui menu toggle black icon button m-right-top m-mobile-show"
      >
        <i class="sidebar icon"></i>
      </a> -->
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
 
  data() {
    return {
     // isActive: true,
    };
  },
  //计算属性
  computed: {
    //   isActive() {
    // //       console.log(a);
    //  console.log(this.$route.path);

    // return  this.$route.path.indexOf(a) !==-1
    //   }
  },
  methods: {
    navBarClick(event) {
      //console.log("点击了");
      var el = event.currentTarget;
      //获取path的值 
      //console.log(el.getAttribute("path"));
     this.$router.push(el.getAttribute("path"))
    },
  },
 
  mounted () {
           //注销菜单
    $(".ui.dropdown").dropdown({
      on: "hover"
    });
    //汉堡按钮
    $(".menu.toggle").click(function() {
      $(".m-item").toggleClass("m-mobile-hide");
    });
  }
};
</script>

<style></style>
