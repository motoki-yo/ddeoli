<template>
<div class="site-wrap">
<!--Account-->
    <main>
        <!-- breadcrumb -->
        <div class="container">
            <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                <a href="/" class="stext-109 cl8 hov-cl1 trans-04">
                    Home
                    <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                </a>

                <span class="stext-109 cl4">
                    My profile
                </span>
            </div>
        </div>

        <!-- Title page -->
        <section class="bg-img1 txt-center p-lr-15 p-tb-92" style="background-image: url('../assets/images/bg-01.jpg');">
            <h2 class="ltext-105 cl0 txt-center">
                Profile
            </h2>
        </section>	

        <!-- Tab -->
        <div class="row">
            <div class="col-3">
                <!-- Tab navs -->
                <div
                class="nav flex-column nav-tabs text-center"
                id="v-tabs-tab"
                role="tablist"
                aria-orientation="vertical"
                >
                <a
                    class="nav-link active"
                    id="v-tabs-home-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-home"
                    role="tab"
                    aria-controls="v-tabs-home"
                    aria-selected="true"
                    >Profile</a
                >
                <a
                    class="nav-link"
                    id="v-tabs-profile-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-profile"
                    role="tab"
                    aria-controls="v-tabs-profile"
                    aria-selected="false"
                    >Adresses</a
                >
                <a
                    class="nav-link"
                    id="v-tabs-messages-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-messages"
                    role="tab"
                    aria-controls="v-tabs-messages"
                    aria-selected="false"
                    >Cards</a
                >

                <a
                    class="nav-link"
                    id="v-tabs-messages-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-messages"
                    role="tab"
                    aria-controls="v-tabs-messages"
                    aria-selected="false"
                    >Orders</a
                >
                </div>
                <!-- Tab navs -->
            </div>

            <div class="col-9">
                <!-- Tab content -->
                <div class="tab-content" id="v-tabs-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="v-tabs-home"
                    role="tabpanel"
                    aria-labelledby="v-tabs-home-tab"
                >
                    Home content
                </div>
                <div
                    class="tab-pane fade"
                    id="v-tabs-profile"
                    role="tabpanel"
                    aria-labelledby="v-tabs-profile-tab"
                >
                    Profile content
                </div>
                <div
                    class="tab-pane fade"
                    id="v-tabs-messages"
                    role="tabpanel"
                    aria-labelledby="v-tabs-messages-tab"
                >
                    <user-orders />
                </div>
                
                <div
                    class="tab-pane fade"
                    id="v-tabs-messages"
                    role="tabpanel"
                    aria-labelledby="v-tabs-messages-tab"
                >
                    <user-orders />
                </div>

                
                </div>
                <!-- Tab content -->
            </div>
            </div> <!-- Tab -->
    </main>
</div>
</template>

<script>
import UserOrders from "./UserOrders.vue"
export default {
  name: 'UserProfile',
  components: {
      UserOrders,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>