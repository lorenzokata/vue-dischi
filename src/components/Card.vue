<template>
  <div class="card d-flex flex-column justify-content-between align-items-center">
    <img class="w-100" :src="cd.poster" alt="">
    <!-- <span></span> -->
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
  height: 100%;
}

</style>
