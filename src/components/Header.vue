<template>
  <header class="d-flex justify-content-between align-items-center pe-3">
    <img src="@/assets/logo.png" alt="spotify logo">
    <Select/>
  </header>
</template>

<script>

import Select from './Select.vue'

export default {
  name: 'Header',
  components:{
    Select
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

header{

  padding: 10px;
  background-color: #2E3A46;

  img{
    height: 80px;
  }

}

</style>
