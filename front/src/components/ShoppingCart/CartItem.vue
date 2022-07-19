<template>
<tr class="table_row">
    <td class="column-1">
        <div class="how-itemcart1">
            <img src="../../../public/assets/images/item-cart-01.jpg" alt="Product image">
        </div>
    </td>
    <td class="column-2"><a href="./shop-single">Fresh Strawberries</a></td>
    <td class="column-3">$ 36.00</td>
    <td class="column-4">
        <input type="number" class="form-control" id="quantity" name="quantity" min="1" max="5" value="1">
    </td>
    <td class="column-5">
        <select v-model="upCountry" class="form-select form-select-lg" required>
            <option selected disabled value="">Choose...</option>
            <option value="1">XS</option>
            <option value="1">S</option>
            <option value="1">M</option>
            <option value="1">L</option>
            <option value="1">XL</option>
        </select>
    </td>
    <td class="column-6">$ 36.00</td>
</tr>
</template>

<script>
export default {
    name:'CartItem'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>