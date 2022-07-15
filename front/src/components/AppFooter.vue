<template>

	<footer class="bg-dark text-center text-white">
	<!-- Grid container -->
	<div class="container p-4 pb-0">
		<!-- Section: Social media -->
		<section class="mb-4">

		<!-- Twitter -->
		<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
			><i class="fab fa-twitter"></i
		></a>

		<!-- Instagram -->
		<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
			><i class="fab fa-instagram"></i
		></a>

		<!-- Github -->
		<a class="btn btn-outline-light btn-floating m-1" href="https://github.com/motoki-yo/ddeoli" role="button"
			><i class="fab fa-github"></i
		></a>
		</section>
		<!-- Section: Social media -->
	</div>
	<!-- Grid container -->

	<!-- Copyright -->
	<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
		<p>Copyright © 2022</p>
		<a class="text-white" href="https://github.com/motoki-yo/ddeoli"><span>ddeoli</span></a>
	</div>
	<!-- Copyright -->
	</footer>
  
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span{
	font-family: 'Bad Boys';
	font-size: 2rem;
	line-height: 0.5rem;
}

span:hover{
	opacity: 70%;
}
</style>