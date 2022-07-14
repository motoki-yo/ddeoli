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
                        <li><a class="text-dark" href = "/orders">orders</a></li>
                        <li><a class="text-dark" style="text-decoration: overline;" href = "/cards">saved credit cards</a></li>
                        <li><a class="text-dark"  href = "/">LOGOUT</a></li>
                    </ul>
                </div>
                
                <div id = "idDivAccount">
                    <div id = "editCards">
                        <p>
                            my saved cards
                        </p> 
                    </div>
                        
                    <div style="display: flex;">
                        <div id="savedAddresses">
                            <ul style="list-style: none;">
                                <li>Name Card</li>
                                <li>Credit card ending in •••• 9999</li>
                                <li>Name on card</li>
                                <li>Expiration date</li>
                                <div style = "float: right; height: 1px;" class="nav-link text-dark"><a onclick="editInf()" style="color: rgb(4, 4, 90);">Edit</a></div>
                            </ul>
                        </div>

                        <div id="savedAddresses" style="border-style:dashed; border-width: 3px; border-color: #C7C7C7;">
                            <div class="nav-link"><a class="text-dark" onclick="editInf()" href="#nq">Add Card</a></div>
                        </div>
                </div>
            </div>
            </div>
        </main>
</div>
</template>

<script>
export default {
    name:'UserCards'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../public/assets/css/to-fix.css';

</style>