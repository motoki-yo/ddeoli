<template>
<div class="site-wrap">
    <header class="site-navbar" role="banner">
      <div class="d-flex justify-content-around navbar site-navbar-top">
        
            <div class="p-2 site-search-icon text-left">
                <form action="" class="d-flex align-items-center">
                  <span class="icon icon-search2"></span>
                  <input type="text" class="form-control border-0" placeholder="Search">
                </form>
              </div>

              <div class="m-r-125 site-logo text-center">
                <a href="/" class="" style="text-decoration: none;">ddeoli</a>
              </div>


              <div class="p-2 site-navbar site-top-icons site-navigation text-right">
                <ul class="site-menu">
                  <li class="has-children">
                    <a href="/profile"><span class="icon icon-person"></span></a>
                      <ul class="dropdown">
                        <!-- Add filters later on -->
                        <li><a href="/profile"><i class="fa-solid fa-id-card"></i> My profile</a></li>
                        <li><a href="/"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
                      </ul>
                  </li>

                  <li>
                    <a href="/cart" class="site-cart">
                      <span class="icon icon-shopping_cart"></span>
                      <span class="count">+</span>
                    </a>
                  </li> 

                  <!-- <li class="d-inline-block d-md-none ml-md-0"><a href="#" class="site-menu-toggle js-menu-toggle"><span class="icon-menu"></span></a></li> -->
                </ul>
              </div> 
      </div> 

      <nav class="site-navigation text-center">
        <div class="container">
          <ul class="site-menu d-md-block">
            <!-- <li class="active"><a href="/">Home</a></li> -->
            <li><a href="/">Home</a></li> 
            <li><a href="/about">About</a></li>
            <li class="has-children">
              <a href="/shop-all">Shop</a>
              <ul class="dropdown">
                <!-- Add filters later on -->
                <li><a href="/shop-all">Synk Dive</a></li>
                <li><a href="/shop-all">Wildside</a></li>
                <li><a href="/shop-all">Maniac</a></li>
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
  name: 'AppNavbar',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
