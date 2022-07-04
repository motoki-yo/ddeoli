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
                    <li><a class="text-dark" href = "/profile">overview</a></li>
                    <li><a class="text-dark" href = "/account-info">account information</a></li>
                    <li><a class="text-dark" href = "/adresses">address book</a></li>
                    <li><a class="text-dark" style="text-decoration: overline;" href = "/orders">orders</a></li>
                    <li><a class="text-dark" href = "/cards">saved credit cards</a></li>
                    <li><a class="text-dark"  href = "/">LOGOUT</a></li>
                </ul>
            </div>
            
            <div id = "idDivAccount">
                <div id = accountInformation>
                    <p>
                        your order history is empty
                    </p> 
                </div>
                    
                <div style="display: flex; width: 50%;">
                    
                </div>
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
    name:'UserOrders'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../public/assets/css/to-fix.css';

</style>