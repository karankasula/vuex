import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
export const store = new vuex.Store({
    strict: true,
    state: {
        products: [
            { name: 'bananana', price: '20' },
            { name: 'apple', price: '50' },
            { name: 'mango', price: '40' },
            { name: 'guava', price: '10' }
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price
                }
            });
            return saleProducts;

        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            });
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function() {
                context.commit('reducePrice', payload)
                    // this denotes which mutation you want to commit
            }, 2000)
        }
    }

})