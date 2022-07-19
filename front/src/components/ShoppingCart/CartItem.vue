<template>
<tr class="table_row">
    <td class="column-1">
        <div class="how-itemcart1">
            <img :src="products[item.productId-1].img" alt="products[item.productId-1].description">
        </div>
    </td>
    <td class="column-2"><router-link :to='{name: "ShopSingle", params: { productId: item.productId }}'>{{  products[item.productId-1].name }}</router-link></td>
    <td class="column-3">$ {{  products[item.productId-1].price }}</td>
    <td class="column-4">
        <input type="number" class="form-control" id="quantity" name="quantity" min="1" max="5" :value="item.quantity">
    </td>
    <td class="column-5">
        <select class="form-select form-select-lg" required>
            <option v-if="!item.size" selected disabled value="">No items available...</option>
            <option v-else v-for="size in products[item.productId-1].sizes" :key="size.value" :value="size" :selected="item.size === size"> {{ size }}</option>
        </select>
    </td>
    <td class="column-6">$ {{  products[item.productId-1].price * item.quantity }}</td>
</tr>
</template>

<script>
import {computed} from 'vue';
import {useStore} from "vuex";

export default {
    name:'CartItem',

    props: ['item', 'product'],

    setup(){
        const store = useStore();
        
        let cart = computed(function () {
        return store.state.cart
        });

        let products = computed(function () {
        return store.state.products
        });

        return {
            cart,
            products
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>