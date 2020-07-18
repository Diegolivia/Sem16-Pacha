<template>
  <div class="home">
    <NaviBar />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NaviBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    NaviBar
  }
};
</script>
