<template>
<div class="site-wrap">
<!--Register-->
    <main>
        <div class = "divLogin">
                create account
                <br>
                <p style="font-size: 11px; margin-top: -10px">join our community. just fill in the form below and enjoy an even smoother shopping experience.</p>
            
            <form id="app" class="container-fluid" v-on:submit.prevent="validate">
                <div class = "divLabel">
                    <label>First Name</label>
                    <div class="invalid" v-if="validation.invalid.firstName">{{ validation.invalid.firstName }}</div>
                </div>
                <div>
                    
                    <input type="text" id="firstName" placeholder="" v-model="firstName" name="First Name" class="textLogin"/>
                    
                </div>

                <div class = "divLabel">
                    <label>Last Name</label>
                    <div class="invalid" v-if="validation.invalid.lastName">{{ validation.invalid.lastName }}</div>
                </div>
                <div>
                    <input type="text" id="lastName" placeholder="" v-model="lastName" name="Last Name" class="textLogin"/>
                </div>

                <div class = "divLabel">
                    <label>Email</label>
                    <div class="invalid" v-if="validation.invalid.email">{{ validation.invalid.email }}</div>
                </div>
                <div>
                    <input type="text" id="email" placeholder="" v-model="email" name="email" class="textLogin"/>
                </div>

                <div class = "divLabel">
                    <label>Mobile number</label>
                </div>
                <div>
                    <input type="tel" id="phone" placeholder="" name="tel" class="textLogin"/>
                </div>

                <div class = "divLabel">
                    <label>Password</label>
                    <div class="invalid" v-if="validation.invalid.password">{{ validation.invalid.password }}</div>
                </div>
                <div class="col-login">
                    <input type="password" id="password" placeholder="" v-model="password" name="password" class="textLogin inputPassword">
                    <div id="passwordContain"></div>
                </div>

                <div class = "divLabel">
                    <label>Confirm Password</label>
                    <div class="invalid" v-if="validation.invalid.repeatPassword">{{ validation.invalid.repeatPassword }}</div>
                </div>
                <div class="col-login">
                    <input type="password" id="repeatPassword" placeholder="" v-model="repeatPassword" name="password" class="textLogin inputPassword">
                    <i class="fa fa-eye showPassword" alt = "showPassword"></i>
                </div>

                <div class = "divLabel">
                    <div>
                        <input type="checkbox" id="newsletters" name="newsletters">
                    </div>
                    
                    <div style = "margin-top: -25px; margin-left: 17px;">
                        <label  for="scales">i would like to sign up for newsletters</label>
                    </div>
                    
                </div>

                <div class = "divLabel">
                    <div>
                        <input type="checkbox" id="privacy" name="privacy" required checked>
                    </div>
                    <div style = "margin-top: -25px; margin-left: 17px;">
                        <label for="scales">I consent to the processing of my personal data according to the privacy policy.</label>
                    </div>
                </div>
                                    
                <div id = "divButtonLogin">
                    <button type="submit" class = "buttonLogin nav-link text-dark">register</button>
                </div>
            </form>
            
        </div>
    </main>
</div>
</template>

<script>
export default {
    name:'AppRegister'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../public/assets/css/to-fix.css';

</style>