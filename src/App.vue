<template>
  <Header></Header>
  <router-view></router-view>
  <!-- 在登陆，注册时隐藏footer -->
  <!-- <Footer v-if="$route.meta.isLogin" /> -->
  <div v-show="$route.meta.isLogin">
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Footer from "./components/Footer/index";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
