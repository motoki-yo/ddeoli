<template>
<div class="site-wrap">
<!--Account-->
    <main>
    <!-- Content page -->
		<div class="flex-w flex-tr">
			<div class="bor10 p-lr-70 p-t-10 p-b-10 p-lr-15-lg w-full">
				<h4 class="mtext-105 cl2 txt-left p-b-30">
					Saved Adress
				</h4>
								
				<form class="needs-validation" novalidate="">
                    
				<button class="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer" type="submit">
					Save changes
				</button>
				
            </form>
			</div>
		</div>

    </main>
</div>
</template>

<script>
// Disable form submissions if there are invalid fields
(function () {
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
}())

export default {
    name:'UserAdresses'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>