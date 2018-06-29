<template lang="html">
  <input type="text">
</template>

<script>
export default {
  data(){
    return{
      status: ''
    }
  },
  methods: {
    cek: function(){
      console.log(this.status);
    }
  }
}
</script>

<style lang="css">
</style>
