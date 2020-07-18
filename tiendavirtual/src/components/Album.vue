<template>
  <div>
    <h1>ALBUM</h1>
    <b-form inline v-on:submit="SingleSearch">
      <div class="mx-auto" style="display:flex;">
        <b-input-group prepend="Id">
          <b-input id="id" placeholder type="number"></b-input>
        </b-input-group>
        <b-button variant="primary" type="submit">Buscar</b-button>
      </div>
    </b-form>
    <b-table striped hover :items="album" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "Album",
  data() {
    return {
      fields: ["userId", "title"],
      album: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData: function() {
      fetch("http://localhost:3000/albums")
        .then(response => response.json())
        .then(json => {
          this.album = json;
        });
    },
    SingleSearch: function(evt) {
      evt.preventDefault();
      let num = document.getElementById("id").value;
      if (num == 0) {
        this.loadData();
      } else {
        let str = "http://localhost:3000/albums/" + num;
        fetch(str)
          .then(response => response.json())
          .then(json => {
            this.album = [json];
          });
      }
    }
  }
};
</script>

<style>
</style>