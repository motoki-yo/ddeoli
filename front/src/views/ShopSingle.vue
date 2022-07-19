<template>
  <div class="site-wrap">
<!-- breadcrumb -->
	<div class="container">
		<div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg m-b-20">
			<a href="/" class="stext-109 cl8 hov-cl1 trans-04">
				Home
				<i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
			</a>

			<a href="/shop-all" class="stext-109 cl8 hov-cl1 trans-04">
				Women
				<i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
			</a>

			<span class="stext-109 cl4">
				Silk Royal Dress
			</span>
		</div>
	</div>
		

	<!-- Product Detail -->
	<section class="sec-product-detail bg0 p-t-20 p-b-20">
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-lg-6 p-b-30">
					<div class="p-l-25 p-r-30 p-lr-0-lg">
						<div class="wrap-slick3 flex-sb flex-w">

							<div class="slick3 gallery-lb">
								<div class="item-slick3" data-thumb="../../public/assets/images/product-detail-01.jpg">
									<div class="wrap-pic-w pos-relative">
										<img src="../../public/assets/images/product-detail-01.jpg" alt="IMG-PRODUCT">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					
				<div class="col-md-4 col-lg-5 p-b-30">
					<div class="p-r-50 p-t-5 p-lr-0-lg">
						<h4 class="mtext-105 cl2 js-name-detail p-b-14">
							Silk Royal Dress
						</h4>

						<span class="mtext-106 cl2">
							$58.79
						</span>

						<p class="stext-102 cl3 p-t-23">
							Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
						</p>
						
						<!--  -->
						<div class="p-t-30">
							<div class="flex-w flex-r-m p-b-10">

								<div class="size-204 respon6-next">
								<div class="col-md-6 mb-4">
								<label for="upCountry" class="form-label">Size</label>
									<select v-model="upCountry" class="form-select form-select-lg" required>
									<option selected disabled value="">Choose...</option>
									<option value="1">XS</option>
									<option value="1">S</option>
									<option value="1">M</option>
									<option value="1">L</option>
									<option value="1">XL</option>
								</select>
								<div class="invalid-feedback lh-condensed"> Please select a <br> valid country. </div>
								</div>
								</div>
							</div>

							<div class="flex-w flex-r-m p-b-10">
								<div class="size-204 flex-w flex-m respon6-next">
									<div class="col-md-6 mb-4">
									<label for="upCountry" class="form-label">Quantity</label>
										<input type="number" class="form-control" id="quantity" name="quantity" min="1" max="5" value="1">
									</div>

									<button class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 m-t-40 p-lr-15 trans-04">
										Add to cart
									</button>
								</div>
							</div>	
						</div>

					</div>
				</div>
			</div>

		</div>
	</section>
  </div>
</template>

<script>
export default {
  name: 'ShopSingle'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>