<template>
    <div id="product-list-one">
        <h2>
            product list one
        </h2>
        <ul>
            <!-- {{products}} -->
            <li v-for="product in saleProducts">
                <span name="name">{{product.name}}</span>
                <span name="price">{{product.price}}</span>
            </li>
        </ul>
        <button v-on:click="reducePrice(4)">reduce Price</button>

    </div>
</template>
<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
//mapactions and mapgetters help you to reduce code complexity
export default {
    computed:{
        products(){
            return this.$store.state.products;
        },
        ...mapGetters([
            'saleProducts'
        ])
        // saleProducts(){
        //     return this.$store.getters.saleProducts;
        // }
    },  
    methods:{
        ...mapActions([
            'reducePrice'
        ])
        // reducePrice:function(amount){
        //     // this.$store.state.products.forEach(product=>{
        //     //     product.price-=1;
        //     // })
        //     // mutations
        //     // this.$store.commit('reducePrice');
        //     // get actions
        //     this.$store.dispatch('reducePrice',amount);
            
        // }
    }
}
</script>
<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>