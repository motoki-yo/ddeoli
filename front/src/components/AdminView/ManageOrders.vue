<template>
<main>
        <!-- Products table START !-->
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col">
                                <h4 class="mtext-105">
                                    Manage orders
                                </h4>
                            </div>

                            <div class="col">
                                <button @click="showAddProductModal = true" class="btn btn-success" data-toggle="modal" disabled><i class="fa-solid fa-circle-plus"></i> <span>Add New Order</span></button>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover mb-0">
                        <thead>
                            <tr>
                                <th colspan="2">User email</th>
                                <th>Date</th>
                                <th>Items</th>
                                <th>Total paid</th>
                                <th colspan="2">Shipping address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="2">melissaquermorrer123@gmail.com</td>
                                <td> 19/07/2022</td>
                                <td> 4</td>
                                <td> $ 420.69</td>
                                <td colspan="2"> Av. São Carlos, 400 - São Carlos/SP - Vila Prado</td>
                                <td>
                                    <button @click="showDeleteProductModal = true"  class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="8" class="text-center">No orders</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    
                </div>
        </div>        <!-- Products table END !-->

        <!-- Delete Modal HTML -->
       <vue-final-modal v-model="showDeleteProductModal" classes="modal-container" name="deletUser">   
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">						
                            <h4 class="modal-title">Delete Product</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">					
                            <p>Are you sure you want to delete these Records?</p>
                            <p class="text-warning"><small>This action cannot be undone.</small></p>
                        </div>
                            <div class="modal-footer modal__action">
                                <button @click="showDeleteProductModal = false" class="btn btn-success">Delete</button>
                                <button @click="showDeleteProductModal = false" class="btn btn-default">Cancel</button>
                            </div>
                    </form>
                </div>
            </div>
        </vue-final-modal>


</main>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal'

export default {
    name:'ManageOrders',
    components: {
        VueFinalModal,
    },
    data () {
        return {
            showModal: false,
            showAddProductModal:false,
            showEditProductModal:false,
            showDeleteProductModal:false,
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../public/assets/css/admin.css';

</style>