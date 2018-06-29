<template lang="html">
  <div class="">
    <div class="title">
      <h1>This is Admin/Edit/{{$route.params}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$route.params.id) //munculkan nilai pada id
  }
}
</script>

<style lang="css">
</style>
