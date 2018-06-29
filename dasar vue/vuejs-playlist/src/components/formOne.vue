<template lang="html">
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>form One - contact Us</h3>
        <p>fill in this form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <label for="">Your Message:</label>
        <textarea></textarea>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Send</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './formHelper.vue'
export default {
  components:{
    'form-helper':formHelper
  },
  data(){
    return{

    }
  },
  methods:{
    handleSubmit:function(){

    }
  }
}
</script>

<style lang="css">
</style>
