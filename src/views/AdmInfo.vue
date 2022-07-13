<template>
<div class="site-wrap">
<!--Account-->
    <main>
        <div id="backgroundProfile" style="background-image: none;">
            <div class="divAccount">
                <ul class="listAccount">
                    <li>my account</li>
                    <br>
                    <br>
                    <li><a class="text-dark" style="text-decoration: overline;" href = "/admInfo">account information</a></li>
                    <li><a class="text-dark" href = "/manageProducts">manage products</a></li>
                    <li><a class="text-dark" href = "/admEdit">administrators</a></li>
                    <li><a class="text-dark"  href = "/">LOGOUT</a></li>
                </ul>
            </div>
            
            <div id = "idDivAccount">
                <div id = accountInformation>
                    <p>
                        my personal information
                    </p> 
                </div>
                    
                <div id = "editAccount">
                    <form class="container-fluid">
                        <div class = "divLabel">
                            <label>First Name</label>
                            <div class="invalid"></div>
                        </div>
                        <div>
                            
                            <input type="text" id="firstName" placeholder="" class="textLogin" disabled/>
                            
                        </div>
    
                        <div class = "divLabel">
                            <label>Last Name</label>
                            <div class="invalid"></div>
                        </div>
                        <div>
                            <input type="text" id="lastName" placeholder="" v-model="lastName" class="textLogin" disabled/>
                        </div>
    
                        <div class = "divLabel">
                            <label>Email</label>
                            <div class="invalid"></div>
                        </div>
                        <div>
                            <input type="text" id="email" placeholder="" class="textLogin" disabled/>
                        </div>
    
                        <div class = "divLabel">
                            <label>Mobile number</label>
                        </div>
                        <div>
                            <input type="tel" id="phone" placeholder="" name="tel" class="textLogin" disabled/>
                        </div>
    
                        <div class = "divLabel">
                            <label>Password</label>
                            <div class="invalid"></div>
                        </div>
                        <div class="col-login">
                            <input type="password" id="password" placeholder=""  class="textLogin inputPassword" disabled>
                            <i class="fa fa-eye showPassword" alt = "showPassword"></i>
                            <div id="passwordContain" style="margin-top: 10px;"></div>
                        </div>
                        <div id = "buttonEdit">
                            <button type="submit" onclick="edit()" class = "buttonLogin nav-link text-dark">EDIT</button>
                        </div>
                        <div id = "buttonEdit">
                            <button style = "display: none;" id="buttonSave" type="submit" onclick="save()" class = "buttonLogin nav-link text-dark">Save</button>
                        </div>
                    </form>
            </div>
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
    name:'AdmInfo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../public/assets/css/to-fix.css';
</style>