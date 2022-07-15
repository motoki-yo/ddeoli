<template>
 <div class="container mt-2 mb-5 how-shadow1" id="myDiv" ref="myDiv" :class="{ rightPanelActive: hidden }">
   
   <!------- Sign up form !------->
    <div class="form-container sign-up-container mt-2">
			<div class="form-wrapper p-lr-70 p-t-10 p-b-10 p-lr-15-lg w-full">
				<h4 class="mtext-105 cl2 txt-left p-b-30">
					Create account
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

                <div class="row mb-4">

                <div class="col-md-4 mb-4">
                  <label for="country" class="form-label">Country</label>
                    <select class="form-select form-select-lg" id="country" required="">
                      <option selected disabled value="">Choose...</option>
                      <option value="1">Brazil</option>
                      <option value="2">Japan</option>
                      <option value="3">South Korea</option>
                  </select>
                  <div class="invalid-feedback lh-condensed"> Please select a <br> valid country. </div>
                </div>

                <div class="col-md-4 mb-4">
                  <label for="country" class="form-label">State</label>
                    <select class="form-select form-select-lg" id="country" required="">
                    <option selected disabled value="">Choose...</option>
                    <option value="1">Acre</option>
                    <option value="2">São Paulo</option>
                    <option value="3">Rio de Janeiro</option>
                  </select>
                  <div class="invalid-feedback lh-condensed"> Please select a <br> valid state. </div>
                </div>

              <div class="col-md mb-4">
                  <label for="zip">Zip code</label>
                  <input type="text" class="form-control" id="zip" placeholder="" required="">
                  <div class="invalid-feedback lh-condensed"> Zip code required. </div>
              </div>

            </div>
                
            <hr class="mb-4">
				
				<button class="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer" type="submit">
					Sign up
				</button>
				
            </form>
			</div>
    </div>

    <!------- Login form !------->
    <div class="form-container sign-in-container">
      <div class="form-wrapper p-lr-70 p-t-100 p-b-10 p-lr-15-lg w-full">
				<h4 class="mtext-105 cl2 txt-left p-b-30">
					Login
				</h4>
								
				<form class="needs-validation" novalidate="">

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
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password" required="">
                    <div class="invalid-feedback lh-condensed"> Please enter your password. </div>
                </div>                
            <hr class="mb-4">
				
				<button class="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer" type="submit">
					Sign in
				</button>
				
            </form>
			</div>
    </div>

    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1 class="font-weight-bold">Good to see you!</h1>
          <p>You already have an account? <br>Sign in!</p>
          <button class="but" id="signIn" @click="slidePanel(false)">Sign In</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1 class="font-weight-bold">Hello, there!</h1>
          <p>You don't have account yet? Don't worry! You still can join us</p>
          <button class="but" id="signUp" @click="slidePanel(true)">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import AppLogin from '../components/LoginRegister/AppLogin.vue'
// import AppRegister from '../components/LoginRegister/AppRegister.vue'
export default {
    name:'LoginRegister',
    data () {
      return {
        hidden: false,
      }
    },
    components: {
        // AppRegister,
        // AppLogin
    },
    methods: {
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
        slidePanel(){
          this.hidden = !this.hidden
        },
    },
	beforeMount(){
		this.formValidation()
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.but {
    border-radius: 20px;
    border: 1px solid #FFFFFF;
    background-color: #7971ea;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 14px 35px;
    letter-spacing: 1px;
    text-transform: uppercase;
    
}

form, .form-wrapper {
    background-color: #ffffff;
}

.social-container {
    margin: 5px ;
}

.social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}

.container {
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
    width: 70em;
    max-width: 100%;
    min-height: 40em;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.rightPanelActive .sign-in-container {
    transform: translateX(100%);
}

.container.rightPanelActive .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show {
    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}
.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.container.rightPanelActive .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    background: #7971ea;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.container.rightPanelActive .overlay {
    transform: translateX(50%);
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
}

.container.rightPanelActive .overlay-left {
    transform: translateX(0);
}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.container.rightPanelActive .overlay-right {
    transform: translateX(20%);
}
</style>