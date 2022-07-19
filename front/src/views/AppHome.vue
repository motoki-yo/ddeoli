<template>
<div class="site-wrap">
	<!-- Slider -->

    <!-- Carousel wrapper -->
	<div id="carouselHome" class="carousel slide carousel-fade carousel" data-mdb-ride="carousel">
	<!-- Indicators -->
	<div class="carousel-indicators">
		<button
		data-mdb-target="#carouselHome"
		data-mdb-slide-to="0"
		class="active"
		aria-current="true"
		aria-label="Slide 3"
		></button>
		<button
		data-mdb-target="#carouselHome"
		data-mdb-slide-to="1"
		aria-label="Slide 1"
		></button>
		<button
		data-mdb-target="#carouselHome"
		data-mdb-slide-to="2"
		aria-label="Slide 2"
		></button>
	</div>

  <!-- Inner -->
  <div class="carousel-inner">
    <!-- Single item -->
    <div class="carousel-item active">
      <img src="../../public/assets/images/slider-01.jpg" class="d-block w-100" alt="Motorbike Smoke"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Synk Dive</h5>
        <p>첨 보는 style, 멋모를 timing, 너의 약점에다, hit, it's so funny! 한밤의 party, 널 끌어당김. 알아도 막을 수 없는 반칙</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <img src="../../public/assets/images/slider-02.jpg" class="d-block w-100" alt="Mountaintop"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Wildside</h5>
        <p>My wild side, my wild side 弱さ超えた まだ見ぬ私を (Wild side) far away, far away 高く高く まだ見ぬ場所まで 誰も止められないもう.</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <img src="../../public/assets/images/slider-03.jpg" class="d-block w-100" alt="Woman Reading a Book"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Maniac</h5>
        <p>Mash up, mind blown 정신은 back up. Prototype 내 속은 언제나 freaky monster, 유행 같은 친절함은 철이 지나 rotten</p>
      </div>
    </div>
  </div>
  <!-- Inner -->

  <!-- Controls -->
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselHome" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselHome" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!-- Carousel wrapper -->

	<!-- Slider -->

	<!-- Banner -->
	<div class="container-fluid p-t-25 p-b-20">
		<div class="row">
			<div class="col-md-6 m-lr-auto">
				<!-- Block1 -->
				<div class="block1 wrap-pic-w">
					<img src="../../public/assets/images/banner-01.jpg" alt="IMG-BANNER">

					<a href="/shop-all" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
						<div class="block1-txt-child1 flex-col-l">
							<span class="block1-name ltext-102 trans-04 p-b-8">
								Synk Dive
							</span>

							<span class="block1-info stext-102 trans-04">
								New Trend
							</span>
						</div>

						<div class="block1-txt-child2 p-b-4 trans-05">
							<div class="block1-link stext-101 cl0 trans-09">
								Shop Now
							</div>
						</div>
					</a>
				</div>
			</div>

			<div class="col-md-6 m-lr-auto">
				<!-- Block1 -->
				<div class="block1 wrap-pic-w">
					<img src="../../public/assets/images/banner-02.jpg" alt="IMG-BANNER">

					<a href="/shop-all" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
						<div class="block1-txt-child1 flex-col-l">
							<span class="block1-name ltext-102 trans-04 p-b-8">
								Wildside
							</span>

							<span class="block1-info stext-102 trans-04">
								New Trend
							</span>
						</div>

						<div class="block1-txt-child2 p-b-4 trans-05">
							<div class="block1-link stext-101 cl0 trans-09">
								Shop Now
							</div>
						</div>
					</a>
				</div>
			</div>

			<div class="col-md-12 p-t-30 p-b-20 m-lr-auto">
				<!-- Block1 -->
				<div class="block1 wrap-pic-w">
					<img src="../../public/assets/images/banner-07.jpg" alt="IMG-BANNER">

					<a href="/shop-all" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
						<div class="block1-txt-child1 flex-col-l">
							<span class="block1-name ltext-102 trans-04 p-b-8">
								Maniac
							</span>

							<span class="block1-info stext-102 trans-04">
								New Trend
							</span>
						</div>

						<div class="block1-txt-child2 p-b-4 trans-05">
							<div class="block1-link stext-101 cl0 trans-09">
								Shop Now
							</div>
						</div>
					</a>
				</div>
			</div>

		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'AppHome'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
