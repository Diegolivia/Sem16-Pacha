<template>
  <div class="home">
    <NaviBar />
    <img alt="Vue logo" src="../assets/logo.png" />
    <component v-bind:is="$store.state.CurrPage"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import NaviBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NaviBar
  }
};
</script>

<style>
img{
  padding-top: 50px;
}
</style>
