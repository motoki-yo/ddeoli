<template>
<div class="site-wrap">
<!--Login-->
    <main>
        <div class = "divLogin">
            welcome to ddeoli.com
            <br>
            <p style="font-size: 11px; margin-top: -10px">login below:</p>
            
            <form>
                <div class = "divLabel">
                    <label>Email</label>
                </div>
                <div>
                    <input type="email" id="emailid" placeholder="" required="required" name="email" class="textLogin"/>
                </div>

                <div class = "divLabel">
                    <label>Password</label>
                </div>
                <div class="col-login">
                    <input type="password" id="password" placeholder="" required="required" name="password" class="textLogin inputPassword">
                    <i class="fa fa-eye showPassword" alt = "showPassword"></i>
                </div>
                <a id = "forgotPassword" href="#">forgot password?</a> 
                
                <div id = "divButtonLogin">
                    <button id = "login" type="submit" class = "buttonLogin nav-link text-dark">login</button>
                </div>
            </form>
            <p style="font-size: 10px;">
                let's be friends
                <br><br>
                create an account with us for an even smoother shopping experience,
                breeze through checkout, store multiple shipping addresses and view
                and track your order easily.
            </p>

            <div id = "divButtonLogin">
                <button type="button" class = "buttonLogin"><a class = "nav-link text-dark" href="/register">register</a></button>
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
    name:'AppLogin'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>