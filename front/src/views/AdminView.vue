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
                    Administrator Settings
                </span>
            </div>
        </div>

        <!-- Title page -->
        <section class="bg-img1 txt-center p-lr-15 p-tb-92" style="background-image: url('../assets/images/bg-01.jpg');">
            <h2 class="ltext-105 cl0 txt-center">
                Admin Dashboard
            </h2>
        </section>	

        <!-- Tab -->
        <div class="row container bg0 p-t-104 p-b-116 text-left">
            <div class="col-3">
                <!-- Tab navs -->
                <div
                class="nav flex-column nav-tabs"
                id="v-tabs-tab"
                role="tablist"
                aria-orientation="vertical"
                >
                <a
                    class="nav-link active"
                    id="v-tabs-manageUsers-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-manageUsers"
                    role="tab"
                    aria-controls="v-tabs-manageUsers"
                    aria-selected="false"
                    >Manage users</a
                >
                <a
                    class="nav-link"
                    id="v-tabs-manageProducts-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-manageProducts"
                    role="tab"
                    aria-controls="v-tabs-manageProducts"
                    aria-selected="false"
                    >Manage Products</a
                >

                <a
                    class="nav-link"
                    id="v-tabs-manageOrders-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-manageOrders"
                    role="tab"
                    aria-controls="v-tabs-manageOrders"
                    aria-selected="false"
                    >Manage Orders</a
                >
                </div>
                <!-- Tab navs -->
            </div>

            <div class="col-9">
                <!-- Tab content -->
                <div class="tab-content" id="v-tabs-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="v-tabs-manageUsers"
                    role="tabpanel"
                    aria-labelledby="v-tabs-manageUsers-tab"
                >
                    <manage-users />
                </div>
                <div
                    class="tab-pane fade"
                    id="v-tabs-manageProducts"
                    role="tabpanel"
                    aria-labelledby="v-tabs-manageProducts-tab"
                >
                    <manage-products />
                </div>
                
                <div
                    class="tab-pane fade"
                    id="v-tabs-manageOrders"
                    role="tabpanel"
                    aria-labelledby="v-tabs-manageOrders-tab"
                >
                    <manage-orders />
                </div>


                </div>
                <!-- Tab content -->
            </div>
            </div> <!-- Tab -->
    </main>
</div>
</template>

<script>
import ManageProducts from "../components/AdminView/ManageProducts.vue"
import ManageUsers from "../components/AdminView/ManageUsers.vue"
import ManageOrders from "../components/AdminView/ManageOrders.vue"
// import A from "../components/AdminView/?"

export default {
  name: 'AdminView',
  components: {
      ManageProducts,
      ManageUsers,
      ManageOrders,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>