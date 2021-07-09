<template>
  <select name="genre" id="genre">
    <option v-for="(genre, index) in genres" :key="index" value="">{{genre.genre}}</option>
  </select>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'Select',
  data() {
    return {
      genres: ''
    }
  },
  created() {
    eventBus.$on('selectGenre', element => {
      this.genres = element
      console.log(this.genres);
    })
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
