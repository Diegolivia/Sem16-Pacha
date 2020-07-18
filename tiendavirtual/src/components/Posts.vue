<template>
  <div>
    <h1>POSTS</h1>
    <b-form inline v-on:submit="SingleSearch">
      <div class="mx-auto" style="display:flex;" >
      <b-input-group prepend="Id">
        <b-input id="id" placeholder="" type="number"></b-input>
      </b-input-group>
      <b-button variant="primary" type="submit">Buscar</b-button>
      </div>
    </b-form>
    <b-table striped hover :items="posts" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      fields: ["title", "body"],
      posts: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData: function() {
      fetch("http://localhost:3000/posts")
        .then(response => response.json())
        .then(json => {
          this.posts = json;
        });
    },
      SingleSearch: function(evt) {
      evt.preventDefault()
      let num = document.getElementById("id").value
      if(num==0){
        this.loadData()
      }
      else{
      let str = "http://localhost:3000/posts/" + num
      fetch(str)
        .then(response => response.json())
        .then(json => {
          this.posts = [json];
        });
        }
    }
  }
};
</script>

<style>
</style>