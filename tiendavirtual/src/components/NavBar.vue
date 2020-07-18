<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#" @click="ChangePage(0)">HOME</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" right>
          <b-nav-item href="#" @click="ChangePage(1)" >USERS</b-nav-item>
          <b-nav-item href="#" @click="ChangePage(2)">POSTS</b-nav-item>
          <b-nav-item href="#" @click="ChangePage(3)">ALBUM</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default{
  methods:{
    ChangePage(page){
      this.$store.commit('ChangePage',page)
    }
  }
}
</script>

<style>
</style>