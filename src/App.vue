<template>
  <div id="app">
    <!-- <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two> -->
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>

  </div>
</template>

<script>
import productonelist from './components/product-list-one.vue';
import producttwolist from './components/product-list-two.vue';
export default {
  components:{
    'product-list-one':productonelist,
    'product-list-two':producttwolist
  },
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

