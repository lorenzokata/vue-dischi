<template>
  <header>
    <img src="@/assets/logo.png" alt="spotify logo">
  </header>
</template>

<script>
export default {
  name: 'Header',
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
