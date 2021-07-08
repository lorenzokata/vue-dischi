<template>
  <div class="card d-flex flex-column justify-content-between align-items-center">
    <img class="w-100" :src="cd.poster" alt="">
    <span class="title text-center text-uppercase fw-bolder">{{ cd.title }}</span>
    <span class="author fw-bold text-secondary">{{ cd.author }}</span>
    <span class="year fw-bold text-secondary">{{ cd.year }}</span>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: ['cd']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card{
  height: 320px;
  background-color: #2E3A46;
  padding: 20px;

  .title{
    color: white;
    // font-weight: 900;
  }
}

</style>
