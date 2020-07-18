<template>
  <div>
    <h1>USERS</h1>
    <b-form inline v-on:submit="SingleSearch">
      <div class="mx-auto" style="display:flex;" >
      <b-input-group prepend="Id">
        <b-input id="user_id" placeholder="" type="number"></b-input>
      </b-input-group>
      <b-button variant="primary" type="submit">Buscar</b-button>
      </div>
    </b-form>
    <b-table striped hover :items="users" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      fields: ["name", "username", "email", "phone"],
      users: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData: function() {
      fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(json => {
          this.users = json;
        });
    },
    SingleSearch: function(evt) {
      evt.preventDefault()
      let num = document.getElementById("user_id").value
      if(num==0){
        this.loadData()
      }
      else{
      let str = "http://localhost:3000/users/" + num
      fetch(str)
        .then(response => response.json())
        .then(json => {
          this.users = [json];
        });
        }
    }
  }
};
</script>

<style>

</style>