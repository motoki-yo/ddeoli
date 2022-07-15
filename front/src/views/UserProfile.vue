<template>
<div class="site-wrap">
<!--Account-->
    <main>
        <!-- breadcrumb -->
        <div class="container">
		<div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg m-b-20">
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
        <div class="row container bg0 p-t-104 p-b-116">
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
                    id="v-tabs-profile-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-profile"
                    role="tab"
                    aria-controls="v-tabs-profile"
                    aria-selected="true"
                    >Profile</a
                >
                <a
                    class="nav-link"
                    id="v-tabs-adresses-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-adresses"
                    role="tab"
                    aria-controls="v-tabs-adresses"
                    aria-selected="false"
                    >Adresses</a
                >
                <a
                    class="nav-link"
                    id="v-tabs-cards-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-cards"
                    role="tab"
                    aria-controls="v-tabs-cards"
                    aria-selected="false"
                    >Cards</a
                >

                <a
                    class="nav-link"
                    id="v-tabs-orders-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-orders"
                    role="tab"
                    aria-controls="v-tabs-orders"
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
                    id="v-tabs-profile"
                    role="tabpanel"
                    aria-labelledby="v-tabs-profile-tab"
                >
                    <account-info />
                </div>
                <div
                    class="tab-pane fade"
                    id="v-tabs-adresses"
                    role="tabpanel"
                    aria-labelledby="v-tabs-adresses-tab"
                >
                    <user-adresses />
                </div>
                <div
                    class="tab-pane fade"
                    id="v-tabs-cards"
                    role="tabpanel"
                    aria-labelledby="v-tabs-cards-tab"
                >
                    <user-cards />
                </div>
                
                <div
                    class="tab-pane fade"
                    id="v-tabs-orders"
                    role="tabpanel"
                    aria-labelledby="v-tabs-orders-tab"
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
import AccountInfo from "../components/UserProfile/AccountInfo.vue"
import UserOrders from "../components/UserProfile/UserOrders.vue"
import UserCards from "../components/UserProfile/UserCards.vue"
import UserAdresses from "../components/UserProfile/UserAdresses.vue"
export default {
  name: 'UserProfile',
  components: {
      AccountInfo,
      UserOrders,
      UserCards,
      UserAdresses
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>