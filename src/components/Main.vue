<template>
  <main class="overflow-auto">
    <div class="container">
      <div class="row row-cols-5">
        <div class="g-5" v-for="(cd,index) in filteredCds" :key="index">
          <Card :cd="cd"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import Card from '@/components/Card.vue';
import axios from 'axios'
import {eventBus} from '../main.js'

export default {
  name: 'Main',
  components: {
    Card
  },

  data() {
    return {
      apiURL : 'https://flynn.boolean.careers/exercises/api/array/music',
      cds : [],
      loading : true,
      changeGenre: false,
    }
  },
  created(){
    this.getCds();
    eventBus.$on('changeGenre', element => {
      this.changeGenre = element
    })
  },
  
  computed: {
    filteredCds(){
  
      if ( !this.changeGenre ) return [];
      if (this.changeGenre=='All') return this.cds
      return this.cds.filter(element => element.genre == this.changeGenre)
    }
  },

  methods: {
    getCds(){ 
      axios
        .get(this.apiURL)
        .then(response => {
          this.cds = response.data.response;
          this.loading = false;
          this.changeGenre = 'All';
          eventBus.$emit('selectGenre', this.cds)
        })
        .catch(error => {
          console.log('Errore: ', error);
        });
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

main{
  background-color: #1E2D3B;
  height: calc(100vh - 100px);
}

</style>
