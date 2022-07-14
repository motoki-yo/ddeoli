<template>
<div class="site-wrap">
    <header class="site-navbar" role="banner">
      <div class="site-navbar-top">
        <div class="container">
          <div class="row align-items-center">

            <div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
              <form action="" class="site-block-top-search">
                <span class="icon icon-search2"></span>
                <input type="text" class="form-control border-0" placeholder="Search">
              </form>
            </div>

            <div class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
              <div class="site-logo">
                <a href="/" class="js-logo-clone" style="text-decoration: none;">ddeoli</a>
              </div>
            </div>

            <div class="col-6 col-md-4 order-3 order-md-3 text-right">
              <div class="site-navbar site-navigation site-top-icons">
                <ul class="site-menu ">
                  <li class="has-children">
                    <a href="/profile"><span class="icon icon-person"></span></a>
                    <ul class="dropdown">
                      <!-- Add filters later on -->
                      <li><a href="/shop-all">Collection One</a></li>
                      <li><a href="/shop-all">Collection Two</a></li>
                      <li><a href="/shop-all">Collection Three</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="/cart" class="site-cart">
                      <span class="icon icon-shopping_cart"></span>
                      <span class="count">2</span>
                    </a>
                  </li> 
                  <li class="d-inline-block d-md-none ml-md-0"><a href="#" class="site-menu-toggle js-menu-toggle"><span class="icon-menu"></span></a></li>
                </ul>
              </div> 
            </div>

          </div>
        </div>
      </div> 
      <nav class="site-navigation text-right text-md-center" role="navigation">
        <div class="container">
          <ul class="site-menu js-clone-nav d-none d-md-block">
            <!-- <li class="active"><a href="/">Home</a></li> -->
            <li><a href="/">Home</a></li> 
            <li><a href="/about">About</a></li>
            <li class="has-children">
              <a href="/shop-all">Shop</a>
              <ul class="dropdown">
                <!-- Add filters later on -->
                <li><a href="/shop-all">Collection One</a></li>
                <li><a href="/shop-all">Collection Two</a></li>
                <li><a href="/shop-all">Collection Three</a></li>
              </ul>
            </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
</div>
</template>

<script>

export default {
  name: 'AppNavbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
