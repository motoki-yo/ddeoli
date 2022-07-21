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
					<button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*" onclick="filterSelection('all')">
						All Products
					</button>

					<button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".synkdive-collection" onclick="filterSelection('synkdive-collection')">
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

			<!-- If no products are registred !-->
			<tr v-if="!products.length">
				<td colspan="10" class="text-center">No products</td>
			</tr>

			<!-- PRODUCT GALLERY !-->
			<div v-else  class="row isotope-grid">
				<ProductSingle v-for="product in products" :product="product" :key="product.id"/>
			</div>
		</div>
	</div>

</div>
</template>

<script>


import {computed} from 'vue';
import {useStore} from "vuex";

import ProductSingle from "../components/ShopAll/ProductSingle.vue";

export default {
	name: 'ShopAll',
	
	components: {
		ProductSingle,
	},
    setup(){
    const store = useStore();
	
	store.dispatch("allProducts")
	let test = computed(function () {
	return store.state.test
	});

	return {
		test,
	}
  },
	computed: {
		products() {
			return this.$store.getters.getProducts;
		}
	},

    data () {
        return {

        }
    },

    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>