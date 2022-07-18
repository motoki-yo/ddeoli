<template>
<main>
        <!-- Products table START !-->
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col">
                                <h4 class="mtext-105">
                                    Manage products
                                </h4>
                            </div>

                            <div class="col">
                                <button @click="showAddProductModal = true" class="btn btn-success" data-toggle="modal"><i class="fa-solid fa-circle-plus"></i> <span>Add New Product</span></button>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover mb-0">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Collection</th>
                                <th>Price</th>
                                <th colspan="2">Description</th>
                                <th>Quantity available</th>
                                <th>Quantity Sold</th>
                                <th>Sizes</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img class = "avatar" src="../../../public/assets/images/product-08.jpg"></td>
                                <td>Vintage Jacket Byeol-i</td>
                                <td>Maniac</td>
                                <td>$ 56.78</td>
                                <td colspan="2">A fashionable, all-dress, high-cut, jacket. I want to perish soooooOOOOOOOoooOoOoO bad.</td>
                                <td> 878</td>
                                <td> 9182</td>
                                <td> XS, S, M, L, XL, XXL</td>
                                <td>
                                    <button @click="showEditProductModal = true"  class="edit" data-toggle="modal"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button @click="showDeleteProductModal = true"  class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="10" class="text-center">No products</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    
                </div>
        </div>        <!-- Products table END !-->
        
        <!-- Add Modal HTML -->
        <vue-final-modal v-model="showAddProductModal" classes="modal-container" name="addUser">   
            <div class="modal-dialog">
                <div class="modal-content">
                    <form validate>
                        <div class="modal-header">						
                            <h4 class="modal-title">Add product</h4>
                            <button class="modal__close" @click="showAddProductModal = false">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div class="modal-body">					
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <textarea class="form-control" required></textarea>
                            </div>
                            <div class="form-group">
                                <label>Phone</label>
                                <input type="text" class="form-control" required>
                            </div>					
                        </div>
                        <div class="modal-footer modal__action">
                            <button @click="showModal = false" class="btn btn-success">Add</button>
                            <button @click="showAddProductModal = false" class="btn btn-default">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </vue-final-modal>

        <!-- Edit Modal HTML -->
       <vue-final-modal v-model="showEditProductModal" classes="modal-container" name="editUser">   
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">						
                            <h4 class="modal-title">Edit product</h4>
                            <button class="modal__close" @click="showEditProductModal = false">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div class="modal-body">					
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <textarea class="form-control" required></textarea>
                            </div>
                            <div class="form-group">
                                <label>Phone</label>
                                <input type="text" class="form-control" required>
                            </div>					
                        </div>
                        <div class="modal-footer modal__action">
                            <button @click="showModal = false" class="btn btn-success">Save changes</button>
                            <button @click="showEditProductModal = false" class="btn btn-default">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </vue-final-modal>

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