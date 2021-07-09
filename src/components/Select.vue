<template>
  <select name="genre" id="genre" v-model="genreSelected" @change="changeGenre">
    <option value="All">All</option>
    <option v-for="(genre, index) in genres" :key="index" :value="genre">{{genre}}</option>
  </select>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'Select',
  data() {
    return {
      genres: [],
      genreSelected: ''
    }
  },

  created() {
    eventBus.$on('selectGenre', array => {
      array.forEach(oggetto => {
        if (!this.genres.includes(oggetto.genre)) {
          this.genres.push(oggetto.genre)
        }
      });
    })
  },

  methods: {
    changeGenre(){
      eventBus.$emit('changeGenre', this.genreSelected)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
