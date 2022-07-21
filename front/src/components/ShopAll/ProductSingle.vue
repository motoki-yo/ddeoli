<template>
    <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item insert-collection-name">
        <!-- Block2 -->
        <div class="block2" :class="product.collectionType">
            <div class="block2-pic hov-img0">
                <router-link :to='{name: "ShopSingle", params: { productId: product._id }}'>
                    <img :src="product.img" :alt="product.description">
                </router-link>
            </div>

            <div class="block2-txt flex-w flex-t p-t-14">
                <div class="block2-txt-child1 flex-col-l ">
                    <router-link :to='{name: "ShopSingle", params: { productId: product._id }}' class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                        {{ product.name }}
                    </router-link>

                    <span class="stext-105 cl3">
                        ${{ product.price }}    
                    </span>
                </div>
                
                <!-- addwish doesn't work yet (and probably never will!) !-->
                <div class="block2-txt-child2 flex-r p-t-3">
                    <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                        <img class="icon-heart1 dis-block trans-04" src="../../../public/assets/images/icons/icon-heart-01.png" alt="ICON">
                        <img class="icon-heart2 dis-block trans-04 ab-t-l" src="../../../public/assets/images/icons/icon-heart-02.png" alt="ICON">
                    </a>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "ProductSingle",
    props : ['product'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>