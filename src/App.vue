<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from "components/navbar/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style></style>
