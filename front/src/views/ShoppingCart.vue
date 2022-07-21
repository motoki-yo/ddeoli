<template>
<div class="container-fluid aling-items-center m-b-50">

	<!-- breadcrumb -->
	<div class="container">
		<div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg m-b-20">
			<a href="/" class="stext-109 cl8 hov-cl1 trans-04">
				Home
				<i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
			</a>

			<span class="stext-109 cl4">
				Shoping Cart
			</span>
		</div>
	</div>
		

	<!-- Shoping Cart -->
		<div class="row">
			<div class="col-lg col-xl m-b-20">
				<div class="wrap-table-shopping-cart">
					<table class="table-shopping-cart">
						<tr class="table_head">
							<th class="column-1">Product</th>
							<th class="column-2"></th>
							<th class="column-3">Price</th>
							<th class="column-4">Quantity</th>
							<th class="column-5">Size</th>
							<th class="column-6">Total</th>

						</tr>
						
						<!-------- CART ITEM COMPONENT !-------->
						<CartItem v-for="item in cart" :item="item" :key="item.id"/>

					</table>
				</div>

				<div class="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
					<div class="flex-c-m stext-101 cl2 size-121 bg2 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
						Update Cart
					</div>
				</div>
			</div>
		</div>

		<!-- Payment and Shipping info -->
		<div class="flex-w flex-tr">
			<div class="size-210 bor10 p-lr-70 p-t-55 p-b-70 w-full-md">
					<h4 class="mtext-109 cl2 p-b-30">
						Cart Totals
					</h4>

					<div class="flex-w flex-t bor12 p-b-13">
						<div class="size-208">
							<span class="stext-110 cl2">
								Subtotal:
							</span>
						</div>

						<div class="size-209">
							<span class="mtext-110 cl2">
								$79.65
							</span>
						</div>
					</div>

					<div class="flex-w flex-t bor12 p-t-15 p-b-30">
						<div class="size-208 w-full-ssm">
							<span class="stext-110 cl2">
								Shipping:
							</span>
						</div>

						<div class="size-209 p-r-18 p-r-0-sm w-full-ssm">
							<p class="stext-111 cl6 p-t-2">
								There are no shipping methods available, this is not a real online store. But please, go ahead and insert your credit card information.
							</p>
						</div>
					</div>

					<div class="flex-w flex-t p-t-27 p-b-33">
						<div class="size-208">
							<span class="mtext-101 cl2">
								Total:
							</span>
						</div>

						<div class="size-209 p-t-1">
							<span class="mtext-110 cl2">
								$79.65
							</span>
						</div>
					</div>
			</div>

			<div class="size-210 bor10 p-lr-70 p-t-55 p-b-70 w-full-md">
				<h4 class="mtext-109 cl2 p-b-30">
					Payment and Shipping
				</h4>
				<form class="needs-validation" novalidate="">
				
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <label for="cc-name" class="form-label">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback lh-condensed"> Name on card is required </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="cc-number" class="form-label">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                        <div class="invalid-feedback lh-condensed"> Credit card number is required </div>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-md-5 mb-4">
                        <label for="cc-expiration" class="form-label">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                        <div class="invalid-feedback lh-condensed"> Expiration date required </div>
                    </div>
                    <div class="col-md-5 mb-4">
                        <label for="cc-cvv" class="form-label">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                        <div class="invalid-feedback lh-condensed"> Security code required </div>
                    </div>
                </div>

				<hr class="mb-4">

                <div class="mb-4">
                    <label for="address" class="form-label">Address</label>
                    <input v-model="newOrderAddress" type="text" class="form-control" placeholder="1234 Main St" required="">
                    <div class="invalid-feedback lh-condensed"> Please enter your shipping address. </div>
                </div>
                
				<div class="mb-4">
					<label>Observations (optional)</label>
					<textarea class="form-control"></textarea>
				</div>
                <hr class="mb-4">
				
				<button @click="register" class="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
					Proceed to checkout
				</button>
				
				</form>
			</div>

		</div><!-- Payment and Shipping info -->

	</div>
</template>

<script>

import CartItem from "../components/ShoppingCart/CartItem.vue"

import {computed} from 'vue';
import {useStore} from "vuex";

export default {
	name: 'ShoppingCart',
	// props : ['order'],

	components: {
		CartItem,
	},
	
	data(){
		return{
			/* Order variables */
			newUserEmail: this.$store.getters.getEmail,
			newItems:"",
			newTotalPrice:"",
			newOrderAddress:"",
		}
	},

    setup(){
		const store = useStore();
		
		let cart = computed(function () {
		return store.state.cart
		});

		return {
			cart,
		}
	},

	computed: {
		users() {
			return this.$store.getters.getOrders
		}
    },
	
	methods:{
		formValidation: function () { // Disable form submissions if there are invalid fields
			'use strict'
			window.addEventListener('load', function () {
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.getElementsByClassName('needs-validation')

			// Loop over them and prevent submission
			Array.prototype.filter.call(forms, function (form) {
				form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault()
					event.stopPropagation()
				}
				form.classList.add('was-validated')
				}, false)
			})
			}, false)
		},
		
        create(payload) {
            this.$store.dispatch("registerOrder", payload)
        },

		async register() {

            await this.$store.dispatch("register", {
                name: this.upName,
                email: this.upEmail,
                password: this.upPassword,
                address: this.upAddress,
                phone: this.upPhone,
            });
        },
	},

	beforeMount(){
		this.formValidation()
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lh-condensed { line-height: 1.25; }
</style>