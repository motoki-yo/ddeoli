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
        <div class="wrap-num-product flex-w m-l-auto m-r-0">
            <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                <i class="fs-16 zmdi zmdi-minus"></i>
            </div>

            <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product1" value="1">

            <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                <i class="fs-16 zmdi zmdi-plus"></i>
            </div>
        </div>
    </td>
    <td class="column-5">$ 36.00</td>
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