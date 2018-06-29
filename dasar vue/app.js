new Vue({
  el: '#app',
  data:{
    output:'your fav food'
  },
  methods:{
    readRefs: function(){
    console.log(this.$refs.test.innerText);
    this.output = this.$refs.input.value;
    }
  }
});
