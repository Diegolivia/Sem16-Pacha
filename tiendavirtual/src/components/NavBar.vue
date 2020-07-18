<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">HOME</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" right>
          <b-nav-item href="#" @click="ChangePage" >USERS</b-nav-item>
          <b-nav-item href="#" >POSTS</b-nav-item>
          <b-nav-item href="#">ALBUM</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default{
  methods:{
    ChangePage(){
      this.$store.commit('ChangePage',0)
    }
  }
}
</script>

<style>
</style>