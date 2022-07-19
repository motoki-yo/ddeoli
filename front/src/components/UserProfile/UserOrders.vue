<template>
<div class="site-wrap">
    <!--Account-->
    <main>
    <!-- Content page -->
        <div class="flex-w flex-tr">
            <div class="p-lr-10 p-t-10 p-b-60 p-lr-15-lg w-full">
				<h4 class="mtext-105 cl2 txt-left">
					Order history
				</h4>
                <h4 class="mtext-101 cl2 txt-left p-b-30">
                    1 order found
				</h4>

                 <!-------- ORDER ITEM !-------->
                <div class="row m-b-15 bor10 align-items-center">
                    <div class="col m-t-20 m-lr-20 p-t-20 p-b-20">
                        <h3 class="mtext-105 cl2 txt-left">
                            Order #1
                        </h3>
                        <h3 class="mtext-102 cl2 txt-left">
                            <button @click="showOrderModal = true" class="btn btn-success" data-toggle="modal"><i class="fa-solid fa-circle-plus"></i> <span>View details</span></button>
                        </h3>
                    </div>
                    <div class="row col">
                        <div class="col">
                            <img src="../../../public/assets/images/item-cart-01.jpg" alt="Product image">
                        </div>
                        <div class="col">
                            <img src="../../../public/assets/images/item-cart-02.jpg" alt="Product image">
                        </div>
                        <div class="col">
                            <img src="../../../public/assets/images/item-cart-03.jpg" alt="Product image">
                        </div>
                    </div>
                </div>


                <div class="how-pos2 p-lr-15-md">
                    <p class="stext-102 cl6">Your order history is empty</p>
                </div>

                <!-- Order details modal -->
                <vue-final-modal v-model="showOrderModal" :lock-scroll="false" classes="modal-container " name="deletUser">   
                        <div class="modal-dialog bg0" style="border-radius: 10px;min-width:50rem;">
                            <div class="modal-content p-lr-20" style="box-shadow:none !important;">
                                <form>
                                    <div class="modal-header">						
                                        <h5 class="text-muted mb-0">Thanks for your Order, <span style="color: #a8729a;">Anna</span>!</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"  @click="showOrderModal = false">&times;</button>
                                    </div>

                                    <div class="modal-body">					
                                        <div class="d-flex justify-content-between align-items-center mb-4">
                                        
                                        </div>
                                        <div class="row bor10 p-lr-20 p-b-10 p-t-10 m-b-10" style="border-radius: 10px;"> 
                                            <div class="col-md-2">
                                                <img src="../../../public/assets/images/item-cart-01.jpg"
                                                class="img-fluid" alt="Phone">
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0">Samsung Galaxy</p>
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0 small">White</p>
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0 small">Capacity: 64GB</p>
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0 small">Qty: 1</p>
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0 small">$499</p>
                                            </div>
                                        </div>
                                        <div class="row bor10 p-lr-20 p-b-10 p-t-10 m-b-10" style="border-radius: 10px;"> 
                                            <div class="col-md-2">
                                                <img src="../../../public/assets/images/item-cart-02.jpg"
                                                class="img-fluid" alt="Phone">
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0">Samsung Galaxy</p>
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0 small">White</p>
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0 small">Capacity: 64GB</p>
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0 small">Qty: 1</p>
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0 small">$499</p>
                                            </div>
                                        </div>
                                        <div class="row bor10 p-lr-20 p-b-10 p-t-10" style="border-radius: 10px;"> 
                                            <div class="col-md-2">
                                                <img src="../../../public/assets/images/item-cart-03.jpg"
                                                class="img-fluid" alt="Phone">
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0">Samsung Galaxy</p>
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0 small">White</p>
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0 small">Capacity: 64GB</p>
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0 small">Qty: 1</p>
                                            </div>
                                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p class="text-muted mb-0 small">$499</p>
                                            </div>
                                        </div>
                                        <hr class="m-b-10" style="background-color: #e0e0e0; opacity: 1;">
                                        <div class="d-flex justify-content-between">
                                            <p class="fw-bold mb-0">Order Details</p>
                                            <p class="text-muted mb-0"><span class="fw-bold me-4">Total</span> $898.00</p>
                                            </div>

                                            <div class="d-flex justify-content-between">
                                            <p class="text-muted mb-0">Invoice Date : 10 Jul, 2022</p>
                                            </div>
                                        </div>
                                        
                                        <div class="modal-footer modal__action">
                                            <button @click="showOrderModal = false" class="btn btn-success">OK</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </vue-final-modal>

            </div>
        </div>
    </main>
</div>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal'

export default {
    name:'UserOrders',
    components: {
        VueFinalModal,
    },
    data () {
        return {
            showOrderModal: false,
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../public/assets/css/admin.css';

.modal-content{
    background: none;
    margin-left: auto;
}


.card-body .wrap{
    max-width: 20rem;
}

</style>