<template lang="html">
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers">
  </product-form>
</template>

<script>
import ProductFrom from '@/components/product/ProductForm.vue'
export default {
  // props: ['model','isEditing'],
  data(){
    return {
      model: {},
      manufacturers: [
        {
          _id: 'sam',
          name: 'Samsung',
        },
        {
          _id: 'apple',
          name: 'Apple'
        }
      ],
    }
  },
  methods: {
    addProduct(model){
      console.log('model',model);
    }
  },
  components: {
    'product-form':ProductFrom
  }
}
</script>

<style>
  .form-control.error{
    border-color: red;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255,71,71,0.6);
  }
</style>
