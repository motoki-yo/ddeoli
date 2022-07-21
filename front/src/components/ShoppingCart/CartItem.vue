<template>
<tr class="table_row">
    <td class="column-1">
        <div class="how-itemcart1">
            <img :src="product.img" alt="product.description">
        </div>
    </td>
    <td class="column-2"><router-link :to='{name: "ShopSingle", params: { productId: item.id }}'>{{  product.name }}</router-link></td>
    <td class="column-3">$ {{  product.price }}</td>
    <td class="column-4">
        <input type="number" class="form-control" id="quantity" name="quantity" min="1" max="5" :value="item.quantity">
    </td>
    <td class="column-5">
        <select class="form-select form-select-lg" required>
            <option v-if="!item.size" selected disabled value="">No items available...</option>
            <option v-else v-for="size in product.sizes" :key="size.value" :value="size" :selected="item.size === size"> {{ size }}</option>
        </select>
    </td>
    <td class="column-6">$ {{  product.price * item.quantity }}</td>
</tr>
</template>

<script>
import {useStore} from "vuex";

export default {
    name:'CartItem',

    props: ['item'],

    setup(props){
        const store = useStore();
        store.dispatch("findProduct", props.item.id)
        store.dispatch("changeCartPrice", store.getters.getCartPrice + (store.getters.getProduct.price * props.item.quantity))
    },

    computed: {
        cart() {
            return this.$store.state.cart
        },
        product() {
            return this.$store.getters.getProduct
        },
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>