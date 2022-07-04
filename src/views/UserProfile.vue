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
                  <li style="text-decoration: overline;"><a class="text-dark" href = "/profile">overview</a></li>
                  <li><a class="text-dark" href = "/account-info">account information</a></li>
                  <li><a class="text-dark" href = "/adresses">address book</a></li>
                  <li><a class="text-dark" href = "/orders">orders</a></li>
                  <li><a class="text-dark" href = "/cards">saved credit cards</a></li>
                  <li><a class="text-dark"  href = "/">LOGOUT</a></li>
              </ul>
          </div>
          
          <div id = "idDivAccount">
              <div id = accountInformation>
                  <p>
                      welcome<br>
                      User!
                  </p> 
              </div>
                  
              <div style="display: flex;">
              <div style="width: 50%;">
                  <p>my saved addresses</p>
                  <div style="display: flex;">
                      <div id="savedAddresses">
                          <ul style="list-style: none;">
                              <li>Full name</li>
                              <li>Address</li>
                              <li>City and Postal Code</li>
                              <li>Country/Region</li>
                              <li>Phone number: </li>
                          </ul>
                      </div>

                      <div id="savedAddresses">
                          <ul style="list-style: none;">
                              <li>Full name</li>
                              <li>Address</li>
                              <li>City and Postal Code</li>
                              <li>Country/Region</li>
                              <li>Phone number: </li>
                          </ul>
                      </div>
                          
                  </div>
                  
                  <p><br>my saved cards</p>
                  <div style="display: flex;">
                      <div id="savedAddresses" style="width: 300px;">
                          <ul style="list-style: none;">
                              <li>Name Card</li>
                              <li>Credit card ending in •••• 9999</li>
                              <li>Name on card</li>
                              <li>Expiration date</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div id="divIdol">
                  <p><a href="#" class="card-title d-inline" style="font-size: 15px; padding-left: 40px; border-top: 20px !important;"> Favorite Idol:</a></p>
                  <div >                            
                      <div id = "favoriteIdol">
                          <img class="card-img fit-div img-fluid" src="../../public/assets/images/banner-01.jpg" style="height: 100%; filter: grayscale(1);" alt="Card image">
                      </div>
                  </div>
                  
              </div>
              </div>
          </div>
      </div>
  </main>
</div>
</template>

<script>

export default {
  name: 'UserProfile'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../public/assets/css/to-fix.css';

</style>