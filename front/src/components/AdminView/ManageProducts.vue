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
                        <!-- Product load !-->
                        <tbody >
                            <!-- If no products are registred !-->
                            <tr v-if="!products.length">
                                <td colspan="10" class="text-center">No products</td>
                            </tr>

                            <!-- Single product !-->
                            <tr v-else v-for="product in products" :product="product" :key="product.id" >
                                <td><img class = "avatar" :src="product.img" :alt="product.description"></td>
                                <td>{{ product.name }}</td>
                                <td>{{ product.collectionType }}</td>
                                <td>$ {{ product.price }}</td>
                                <td colspan="2">{{ product.description}} </td>
                                <td> {{ product.qtyInInventory }}</td>
                                <td> {{ product.qtyInInventory * Math.floor(Math.random() * 10) }}</td>
                                <td> {{ product.sizes.join(', ') }}</td>
                                <td>
                                    <button productTable="product" @click="sendProductInfoModal(product); showEditProductModal = true"  class="edit" data-toggle="modal"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button @click="showDeleteProductModal = true"  class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    
                </div>
        </div> <!-- Products table END !-->
        
        <!-- Add Modal HTML -->
        <vue-final-modal v-model="showAddProductModal" classes="modal-container" name="addProduct">   
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
                                <label>Image</label>
                                <input type="text" v-model="newImg" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text"  v-model="newName" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Collection</label>
                                <select v-model="newCollection" class="form-select form-control" aria-label="Default select example" required>
                                    <option selected disabled>Open this select menu</option>
                                    <option value="Synk Dive">Synk Dive</option>
                                    <option value="Wildside">Wildside</option>
                                    <option value="Maniac">Maniac</option>
                                </select>
                            </div>                            				
                            <div class="row">
                                <div class="form-group col-6">
                                    <label>Price</label>
                                    <input v-model="newPrice" type="text" class="form-control" required>
                                </div>
                                <div class="form-group col-6">
                                    <label>Quantity in stock</label>
                                    <input v-model="newQty" type="text" class="form-control" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                               <textarea v-model="newDesc" class="form-control" required></textarea>
                            </div>

                            <div class="form-group">
                                <label>Sizes</label>
                                <div class="check-wrap">
                                    <div class="form-check form-check-inline">
                                    <input v-model="sizes" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="XS">
                                    <label class="form-check-label" for="inlineCheckbox1">XS</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input v-model="sizes" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="S">
                                    <label class="form-check-label" for="inlineCheckbox2">S</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input v-model="sizes" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="M">
                                    <label class="form-check-label" for="inlineCheckbox3">M</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input v-model="sizes" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="L">
                                    <label class="form-check-label" for="inlineCheckbox3">L</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input v-model="sizes" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="XL">
                                    <label class="form-check-label" for="inlineCheckbox3">XL</label>
                                    </div>
                                </div>
                            </div>						
                        </div>
                        <div class="modal-footer modal__action">
                            <button @click="create({
                                    newImg:newImg,
                                    newName:newName,
                                    newPrice:newPrice,
                                    newQty:newQty,
                                    newDescription:newDesc,
                                    newCollection:newCollection,
                                    sizes: sizes,
                           })" class="btn btn-success" type="button">Add</button>
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
                                <label>Image</label>
                                <input type="text" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" v-model="selectedProduct.name" required>
                            </div>
                            <div class="form-group">
                                <label>Collection</label>
                                <select v-model="selectedProduct.collectionType" class="form-select form-control" aria-label="Default select example">
                                    <option value="Synk Dive" :selected= " selectedProduct.collectionType === 'Synk Dive' ">Synk Dive</option>
                                    <option value="Wildside" :selected= " selectedProduct.collectionType === 'Wildside' ">Wildside</option>
                                    <option value="Maniac" :selected= " selectedProduct.collectionType === 'Maniac' ">Maniac</option>
                                </select>
                            </div>                            				
                            <div class="row">
                                <div class="form-group col-6">
                                    <label>Price</label>
                                    <input type="text" class="form-control" v-model="selectedProduct.price" required>
                                </div>
                                <div class="form-group col-6">
                                    <label>Quantity in stock</label>
                                    <input type="text" class="form-control" v-model="selectedProduct.qtyInInventory" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                               <textarea class="form-control" v-model="selectedProduct.description" required></textarea>
                            </div>

                            <div class="form-group">
                                <label>Sizes</label>
                                <div class="check-wrap">
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="XS" :checked="selectedProduct.sizes?.includes('XS')">
                                    <label class="form-check-label" for="inlineCheckbox1">XS</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="S" :checked="selectedProduct.sizes?.includes('S')">
                                    <label class="form-check-label" for="inlineCheckbox2">S</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="M" :checked="selectedProduct.sizes?.includes('M')">
                                    <label class="form-check-label" for="inlineCheckbox3">M</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="L" :checked="selectedProduct.sizes?.includes('L')">
                                    <label class="form-check-label" for="inlineCheckbox3">L</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="XL" :checked="selectedProduct.sizes?.includes('XL')">
                                    <label class="form-check-label" for="inlineCheckbox3">XL</label>
                                    </div>
                                </div>
                            </div>						
                        </div>
                        <div class="modal-footer modal__action">
                            <button @click="update" class="btn btn-success" type="button">Save changes</button>
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
                            <button class="modal__close" @click="showDeleteProductModal = false">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div class="modal-body">					
                            <p>Are you sure you want to delete these Products?</p>
                            <p class="text-warning"><small>This action cannot be undone.</small></p>
                        </div>
                            <div class="modal-footer modal__action">
                                <button @click="deleteProduct" class="btn btn-success">Delete</button>
                                <button @click="showDeleteProductModal = false" class="btn btn-default">Cancel</button>
                            </div>
                    </form>
                </div>
            </div>
        </vue-final-modal>


</main>
</template>

<script>
import {useStore} from "vuex";

import { VueFinalModal } from 'vue-final-modal'


export default {
    name:'ManageProducts',
    props : ['product'],

    components: {
        VueFinalModal,
    },

    setup(){
        const store = useStore();
        store.dispatch("allProducts")
    },

    computed: {
        products() {
            return this.$store.getters.getProducts;
        }
    },

    data () {
        return {
            showModal: false,
            showAddProductModal:false,
            showEditProductModal:false,
            showDeleteProductModal:false,
            selectedProduct: '',
            newImg: '',
            newName: '',
            newCollection: '',
            newPrice: '',
            newQty: '',
            newDesc: '',
            sizes: [],
        }
    },

    methods: {
        sendProductInfoModal(tableProduct) {
            this.selectedProduct = tableProduct;
        },
        create(payload) {
            this.$store.dispatch("registerProduct", payload)
        },
        remove(payload) {
            this.$store.dispatch("deleteProduct", payload)
        },
        deleteProduct() {
            this.$store.dispatch("delete", this.selectedProduct)
        },
        update() {
            console.log("eu vou me matar")
            this.$store.dispatch("updateProduct", this.selectedProduct).then(() => {
                window.location.reload();
            });
        },
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../public/assets/css/admin.css';

</style>