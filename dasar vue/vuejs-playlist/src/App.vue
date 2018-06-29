<template>
  <div>
    <onoff></onoff>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlog from './components/listBlog.vue';
import header from './components/header.vue';
import onoff from './components/onoff.vue';
export default {
  components:{
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blog': listBlog,
    'app-header':header,
    'onoff':onoff
  },
  data(){
    return{

    }
  }
}
</script>

<style>
  body{
    margin:0;
    font-family:'Nunito SemiBold';
  }
</style>
