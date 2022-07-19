<template>
<div class="site-wrap">

	<!-- breadcrumb -->
	<div class="container">
		<div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
			<a href="/" class="stext-109 cl8 hov-cl1 trans-04">
				Home
				<i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
			</a>

			<span class="stext-109 cl4">
				Shop All
			</span>
		</div>
	</div>

  <!-- Product -->
	<div class="bg0 m-t-23 p-b-140">
		<div class="container">

			<!-- filter doesn't work yet (and probably never will!) !-->
			<div class="flex-w flex-sb-m p-b-52">
				<div class="flex-w flex-l-m filter-tope-group m-tb-10">
					<button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
						All Products
					</button>

					<button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".synkdive-collection">
						Synk Dive
					</button>

					<button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".wildside-colection">
						Wildside
					</button>

					<button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".maniac-collection">
						Maniac
					</button>
				</div>

				<div class="flex-w flex-c-m m-tb-10">
					<div class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
						<i class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
						Filter
					</div>

					<div class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
						<i class="fa fa-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
						Search
					</div>
				</div>
			</div>

			<!-- PRODUCT GALLERY !-->
			<div class="row isotope-grid">
				<ProductSingle v-for="product in products" :product="product" :key="product.id" />
			</div>
		</div>
	</div>

</div>
</template>

<script>
import ProductSingle from "../components/ShopAll/ProductSingle.vue";

// import Cart from "../components/Cart.vue";
import {computed} from 'vue';
import {useStore} from "vuex";

export default {
	name: 'ShopAll',
	components: {
		ProductSingle,
		// Cart
	},
    setup(){
    const store = useStore();
    let products = computed(function () {
      return store.state.products
    });
    // let cart = computed(function () {
    //   return store.state.cart
    // });
    return {
      products,
    //   cart
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>