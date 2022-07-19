<template>
<main>
        <!-- Products table START !-->
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col">
                                <h4 class="mtext-105">
                                    Manage users
                                </h4>
                            </div>

                            <div class="col">
                                <button @click="showAddUserModal = true" class="btn btn-success" data-toggle="modal"><i class="fa-solid fa-circle-plus"></i> <span>Add New User</span></button>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <!-- User load !-->
                        <tbody>
                            <!-- If no users are registred !-->
                            <tr v-if="!users.length">
                                <td colspan="6" class="text-center">No users</td>
                            </tr>

                            <!-- Single user !-->
                            <tr v-else v-for="user in users" :user="user" :key="user.id" >
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.address }}</td>
                                <td>{{ user.phone }}</td>
                                <td>{{ user.isAdmin ? "Admin" : "Client"}}</td>
                                <td>
                                    <button userTable="user" @click="sendUserInfoModal(user); showEditUserModal = true"  class="edit" data-toggle="modal"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button @click="showDeleteUserModal = true"  class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>

                            
                        </tbody>
                    </table>
                    
                </div>
        </div>        <!-- Products table END !-->
        
        <!-- Add Modal HTML -->
        <vue-final-modal v-model="showAddUserModal" classes="modal-container" name="addUser">   
            <div class="modal-dialog">
                <div class="modal-content">
                    <form validate>
                        <div class="modal-header">						
                            <h4 class="modal-title">Add user</h4>
                            <button class="modal__close" @click="showAddUserModal = false">
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
                                <input class="form-control" required>
                            </div>	
                            <div class="form-group">
                                <label>Role</label>
                                <select class="form-select form-control" aria-label="Default select example" required>
                                    <option selected disabled>Select role...</option>
                                    <option value="1">Client</option>
                                    <option value="2">Admin</option>
                                </select>
                            </div>  				
                        </div>
                        <div class="modal-footer modal__action">
                            <button @click="showAddUserModal = false" class="btn btn-success">Add</button>
                            <button @click="showAddUserModal = false" class="btn btn-default">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </vue-final-modal>

        <!-- Edit Modal HTML -->
        <vue-final-modal v-model="showEditUserModal" classes="modal-container" name="editUser">   
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">						
                            <h4 class="modal-title">Edit user</h4>
                            <button class="modal__close" @click="showEditUserModal = false">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div class="modal-body">					
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" :value="selectedUser.name" required>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" :value="selectedUser.email" required>
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <textarea class="form-control" :value="selectedUser.address" required></textarea>
                            </div>
                            <div class="form-group">
                                <label>Phone</label>
                                <input type="text" class="form-control" :value="selectedUser.phone" required>
                            </div>
                            <div class="form-group">
                                <label>Role</label>
                                <select class="form-select form-control" aria-label="Default select example" required>
                                    <option value="false" :selected="!selectedUser.isAdmin">Client</option>
                                    <option value="true" :selected="selectedUser.isAdmin">Admin</option>
                                </select>
                            </div>  					
                        </div>
                        <div class="modal-footer modal__action">
                            <button @click="showModal = false" class="btn btn-success">Save changes</button>
                            <button @click="showEditUserModal = false" class="btn btn-default">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </vue-final-modal>

        <!-- Delete Modal HTML -->
       <vue-final-modal v-model="showDeleteUserModal" classes="modal-container" name="deletUser">   
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">						
                            <h4 class="modal-title">Delete User</h4>
                            <button class="modal__close" @click="showDeleteUserModal = false">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div class="modal-body">					
                            <p>Are you sure you want to delete these Records?</p>
                            <p class="text-warning"><small>This action cannot be undone.</small></p>
                        </div>
                            <div class="modal-footer modal__action">
                                <button @click="showDeleteUserModal = false" class="btn btn-success">Delete</button>
                                <button @click="showDeleteUserModal = false" class="btn btn-default">Cancel</button>
                            </div>
                    </form>
                </div>
            </div>
        </vue-final-modal>


</main>
</template>

<script>
import {computed} from 'vue';
import {useStore} from "vuex";

import { VueFinalModal } from 'vue-final-modal'

export default {
    name:'ManageUsers',
    props : ['user'],

    components: {
        VueFinalModal,
    },

    setup(){
        const store = useStore();
        
        let users = computed(function () {
        return store.state.users
        });

        return {
            users,
        }
    },
    
    data () {
        return {
            showModal: false,
            showAddUserModal:false,
            showEditUserModal:false,
            showDeleteUserModal:false,
            selectedUser: '',
        }
    },

    methods: {
        sendUserInfoModal(tableUser) {
            this.selectedUser = tableUser;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../public/assets/css/admin.css';
</style>