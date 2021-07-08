<template>
  <main>
    <div class="container">
      <div class="row row-col-5 g-2">
        <div class="card-box" v-for="cd in cds" :key="cd.id" :cd="cd">
          <Card/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import Card from './Card.vue';
import axios from 'axios'

export default {
  name: 'Main',
  components: Card,
  data() {
    return {
      apiURL : 'https://flynn.boolean.careers/exercises/api/array/music',
      cds : '',
      loading : true
    }
  },
  created(){
    this.getCds();
  },
  methods: {
    getCds(){
      axios
        .get(this.apiURL)
        .then(response => {
          console.log();
          this.cds = response.data.response;
          console.log(this.cds);
          this.loading = false;
        })
        .catch(error => {
          console.log('Errore: ', error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

main{
  background-color: #1E2D3B;
}

</style>
