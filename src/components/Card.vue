<template>
  <div class="card d-flex flex-column justify-content-between align-items-center">
    <img :src="cd.poster" alt="">
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



</style>
