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
                    <label for="upName" class="form-label">Full name</label>
                    <input 
                        v-model="upName"
                        type="text" 
                        class="form-control" 
                        placeholder="" 
                        required />
                    <div class="invalid-feedback lh-condensed"> Valid full name is required.</div>
                </div>

                <div class="col-md mb-4">
                    <label for="upEmail" class="form-label">E-mail</label>
                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            <span class="input-group-text">@</span>
                        </div>
                        <input 
                            v-model="upEmail"
                            type="email" 
                            class="form-control" 
                            placeholder="you@example.com" 
                            required/>
                        <div class="invalid-feedback lh-condensed" style="width: 100%;"> Your email is required. </div>
                    </div>
                </div>

                <div class="mb-4">
                    <label for="upPassword" class="form-label">Password</label>
                    <input 
                        v-model="upPassword"
                        type="password" 
                        class="form-control" 
                        placeholder="Enter a password" 
                        required/>
                    <div class="invalid-feedback lh-condensed"> Please enter a password. </div>
                </div> 

                <div class="mb-4">
                    <label for="upPhone" class="form-label">Phone</label>
                    <input 
                        v-model="upPhone"
                        type="text" 
                        class="form-control" 
                        placeholder="+55(00)00000-0000" 
                        required/>
                    <div class="invalid-feedback lh-condensed"> Please enter your phone number. </div>
                </div>

                <div class="mb-4">
                    <label for="upAddress" class="form-label">Address</label>
                    <input 
                        v-model="upAddress"
                        type="text" 
                        class="form-control" 
                        placeholder="1234 Main St" 
                        required/>
                    <div class="invalid-feedback lh-condensed"> Please enter your shipping address. </div>
                </div>

            <!-- <div class="row mb-4">

                <div class="col-md-4 mb-4">
                  <label for="upCountry" class="form-label">Country</label>
                    <select v-model="upCountry" class="form-select form-select-lg" required>
                      <option selected disabled value="">Choose...</option>
                      <option value="1">Brazil</option>
                  </select>
                  <div class="invalid-feedback lh-condensed"> Please select a <br> valid country. </div>
                </div>

                <div class="col-md-4 mb-4">
                  <label for="upState" class="form-label">State</label>
                    <select v-model="upState" class="form-select form-select-lg" required>
                        <option selected disabled value="">Choose...</option>
                        <option v-for="state in brazilStates" :key="state.value" :value="state.value">{{ state.text }}</option>
                    </select>
                  <div class="invalid-feedback lh-condensed"> Please select a <br> valid state. </div>
                </div>

              <div class="col-md mb-4">
                  <label for="upZipcode">Zip code</label>
                  <input 
                    v-model="upZipCode"
                    type="text" 
                    class="form-control"
                    placeholder="" 
                    required/>
                  <div class="invalid-feedback lh-condensed"> Zip code required. </div>
              </div>

            </div> -->
                
            <hr class="mb-4">
				
            <button @click="register" class="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer" type="submit">
                Sign up
            </button>
				
            </form>
			</div>
    </div>

    <!------- Login form !------->
    <div class="form-container sign-in-container">
      <div class="form-wrapper p-lr-70 p-t-180 p-b-10 p-lr-15-lg w-full">
				<h4 class="mtext-105 cl2 txt-left p-b-30">
					Login
				</h4>
								
				<form class="needs-validation" novalidate="">

                <div class="col-md mb-4">
                    <label for="inEmail" class="form-label">E-mail</label>
                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            <span class="input-group-text">@</span>
                        </div>
                        <input
                            v-model="inEmail"
                            type="email" 
                            class="form-control" 
                            id="inEmail" 
                            placeholder="you@example.com" 
                            required/>
                        <div class="invalid-feedback lh-condensed" style="width: 100%;"> Your email is required. </div>
                    </div>
                </div>

                <div class="mb-4">
                    <label for="inPassword" class="form-label">Password</label>
                    <input 
                        v-model="inPassword"
                        type="password" 
                        class="form-control" 
                        placeholder="Enter your password" 
                        required/>
                    <div class="invalid-feedback lh-condensed"> Please enter your password. </div>
                </div>                
            <hr class="mb-4">
				
				<button @click="login" class="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer" type="submit">
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

export default {
    name:'LoginRegister',
    data(){

      return{
        hidden: false,

        /* Sign'in' variables */
        inEmail:"",
        inPassword:"",

        /* Sign'up' variables */
        upEmail:"",
        upPassword:"",
        upName:"",
        upAddress:"",
        upPhone:"",

        // upCountry:"",
        // upState:"",
        // upZipCode:"",


        // brazilStates: [
        //     { text: 'Acre',                 value: 'AC' }, 
        //     { text: 'Alagoas',              value: 'AL' }, 
        //     { text: 'Amapá',                value: 'AP' }, 
        //     { text: 'Amazonas',             value: 'AM' }, 
        //     { text: 'Bahia',                value: 'BA' }, 
        //     { text: 'Ceará',                value: 'CE' }, 
        //     { text: 'Distrito Federal',     value: 'DF' }, 
        //     { text: 'Espírito Santo',       value: 'ES' }, 
        //     { text: 'Goiás',                value: 'GO' }, 
        //     { text: 'Maranhão',             value: 'MA' }, 
        //     { text: 'Mato Grosso',          value: 'MT' }, 
        //     { text: 'Mato Grosso do Sul',   value: 'MS' }, 
        //     { text: 'Minas Gerais',         value: 'MG' }, 
        //     { text: 'Paraná',               value: 'PR' }, 
        //     { text: 'Paraíba',              value: 'PB' }, 
        //     { text: 'Pará',                 value: 'PA' }, 
        //     { text: 'Pernambuco',           value: 'PE' }, 
        //     { text: 'Piauí',                value: 'PI' }, 
        //     { text: 'Rio de Janeiro',       value: 'RJ' }, 
        //     { text: 'Rio Grande do Norte',  value: 'RN' }, 
        //     { text: 'Rio Grande do Sul',    value: 'RS' }, 
        //     { text: 'Rondonia',             value: 'RO' }, 
        //     { text: 'Roraima',              value: 'RR' }, 
        //     { text: 'Santa Catarina',       value: 'SC' }, 
        //     { text: 'Sergipe',              value: 'SE' }, 
        //     { text: 'São Paulo',            value: 'SP' }, 
        //     { text: 'Tocantins',            value: 'TO' }
        // ]

      }

    },

    components: {

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

        async login() {
            await this.v$.$reset();
            
            await this.v$.inEmail.$touch();
            await this.v$.inPassword.$touch();
           
             await this.$store.dispatch("auth", {
                 email: this.inEmail,
                 password: this.inPassword,
             });
             if (!this.$store.getters.getIsLogged) {
                /* Notificar erro no login: email ou senha incorretos */
             } else {
                /* Notificar login com sucesso */
                this.$router.push("/profile");
             }
         },

        async register() {
            await this.v$.$reset();
            await this.v$.upEmail.$touch();
            await this.v$.upName.$touch();
            await this.v$.upPassword.$touch();
            await this.v$.upPhone.$touch();

            await this.$store.dispatch("register", {
                name: this.upName,
                email: this.upEmail,
                password: this.upPassword,
                address: this.upAddress,
                phone: this.upPhone,
            });
            if (!this.$store.getters.getIsLogged) {
                /* Notificar erro no cadastro */
            } else {
                /* Notificar cadastro com sucesso */
                this.$router.push("/profile");
            }
         },
    },

	beforeMount(){
		this.formValidation()
	}
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
    width: 75em;
    max-width: 100%;
    min-height: 50em;
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