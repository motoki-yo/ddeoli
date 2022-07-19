<template>
<div class="site-wrap">
<!--Account-->
    <main>
    <!-- Content page -->
		<div class="flex-w flex-tr">
			<div class="bor10 p-lr-70 p-t-10 p-b-10 p-lr-15-lg w-full">
				<h4 class="mtext-105 cl2 txt-left p-b-30">
					Edit profile information
				</h4>
								
				<form class="needs-validation" novalidate="">
                <div class="col-md mb-4">
                    <label for="firstName" class="form-label">Full name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                    <div class="invalid-feedback lh-condensed"> Valid full name is required.</div>
                </div>

                <div class="col-md mb-4">
                    <label for="username" class="form-label">E-mail</label>
                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            <span class="input-group-text">@</span>
                        </div>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com" required="">
                        <div class="invalid-feedback lh-condensed" style="width: 100%;"> Your email is required. </div>
                    </div>
                </div>

                <div class="mb-4">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
                    <div class="invalid-feedback lh-condensed"> Please enter your shipping address. </div>
                </div>

                <div class="mb-4">
                    <label for="phone" class="form-label">Phone</label>
                    <input type="text" class="form-control" id="address" placeholder="+55(00)00000-0000"  required="">
                    <div class="invalid-feedback lh-condensed"> Please enter your phone. </div>
                </div>
                
                <hr class="mb-4">
				
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
export default {
    name:'AccountInfo',
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
        }
    },


    data() {

      return{

        user: {
          name: null,
          email: null,
          address: null,
          country: null,
          state: null,
          zipcode: null,
          phone: null,
          role: null,
        },

      }

    },

    beforeMount(){
        this.formValidation()
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.lh-condensed { line-height: 1.25rem; }

</style>