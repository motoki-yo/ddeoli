<template>
<div class="site-wrap">
<!--Account-->
    <main>
        <div id="backgroundProfile" style="background-image: none;">
            <div class="divAccount">
                <ul class="listAccount">
                    <li>my account</li>
                    <br>
                    <br>
                    <li><a class="text-dark" href = "/admInfo">account information</a></li>
                    <li><a class="text-dark" style="text-decoration: overline;" href = "/manageProducts">manage products</a></li>
                    <li><a class="text-dark" href = "/admEdit">administrators</a></li>
                    <li><a class="text-dark" href = "/">LOGOUT</a></li>
                </ul>
            </div>
            
            <div id = "idDivAccount">
                <div id = accountInformation>
                    <p>
                    </p> 
                </div>
                
                <!--Edit products pop-up-->
                <div class="editPop pop">
                    <!--Image Upload-->
                    <form method="post" id="edit_product" action="/manageProducts">
                        <div>
                            <div class="image-upload-one">
                                <div class="center">
                                    <div class="form-input">
                                        <label for="file-ip-1">
                                            <img id="file-ip-1-preview" src="https://i.ibb.co/ZVFsg37/default.png">
                                            <button type="button" class="imgRemove" onclick="myImgRemoveFunctionOne()"></button>
                                        </label>
                                        <input type="file"  name="img_one" id="file-ip-1" accept="image/*" onchange="showPreviewOne(event);">
                                    </div>
                                    <small class="small">Use the &#8634; icon to reset the image</small>
                                </div>
                                
                                <div class = "divPopUp" style ="margin-top:-15px;">
                                    <div style="width: 6vw;" class = "popup-label">
                                        <div class = "divLabel">
                                            <label>size</label>
                                        </div>
                                        <div>
                                            <select name="size" class="size">
                                                <option value="xs">xs</option>
                                                <option value="s">s</option>
                                                <option value="m">m</option>
                                                <option value="l">l</option>
                                                <option value="xl">l</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class = "popup-label" style="width: 6vw;">
                                        <div class = "divLabel">
                                            <label>color</label>
                                        </div>
                                        <div>
                                            <input type="text" class="color" placeholder="" name="color"/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class = "popup-label" style="width: 6vw;">
                                        <div class = "divLabel">
                                            <label>quantity in stock</label>
                                        </div>
                                        <div>
                                            <input type="text" class="stock" placeholder="" name="quantity in stock"/>
                                        </div>
                                    </div>    
                                    
                                    <div class = "popup-label" style="width: 6vw;">
                                        <div class = "divLabel">
                                            <label>quantity sold</label>
                                        </div>
                                        <div>
                                            <input type="text" class="sold" placeholder="" name="quantity sold"/>
                                        </div>
                                    </div>  
                                </div>
                            </div>

                            <div style="width:35%; float:left;">
                                <div class = "divPopUp">
                                    <div class = "popup-label" style="width: 6vw; margin-right: -1vw;">
                                        <div class = "divLabel">
                                            <label>ID</label>
                                        </div>
                                        <div>
                                            <input type="text" class="id" placeholder="" name="id"/>
                                        </div>
                                    </div>

                                    <div class = "popup-label" style="width: 10vw; margin-right: -1vw;">
                                        <div class = "divLabel">
                                            <label>name</label>
                                        </div>
                                        <div>
                                            <input type="text" class="name" placeholder="" name="name"/>
                                        </div>
                                    </div>
                                </div>

                                <div class = "popup-label" style="width: 10vw; margin-right: -1vw;">
                                    <div class = "divLabel">
                                        <label>product</label>
                                    </div>
                                    <div>
                                        <input type="text" class="product" placeholder="" name="product"/>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        
                        <div class = "divPopUp">
                             <p style = "margin-top:10px;">
                                <input class = "saveEdit" type="submit" value="Save" name="commit" id="message_submit"/>
                                <button class="cancelEdit"><a class="cancel" href="/">Cancel</a></button>
                            </p>
                        </div>
                    </form>
                </div>

                <!--Add New Product-->
                <div class="editPop popInsert">
                    <!--Image Upload-->
                    <form method="post" id="edit_product" action="/manageProducts">
                        <div>
                            <div class="image-upload-one">
                                <div class="center">
                                    <div class="form-input">
                                        <label for="file-ip-1">
                                            <img id="file-ip-1-preview" src="https://i.ibb.co/ZVFsg37/default.png">
                                            <button type="button" class="imgRemove" onclick="myImgRemoveFunctionOne()"></button>
                                        </label>
                                        <input type="file"  name="img_one" id="file-ip-1" accept="image/*" onchange="showPreviewOne(event);">
                                    </div>
                                    <small class="small">Use the &#8634; icon to reset the image</small>
                                </div>
                                
                                <div class = "divPopUp" style ="margin-top:-15px;">
                                    <div style="width: 6vw;" class = "popup-label">
                                        <div class = "divLabel">
                                            <label>size</label>
                                        </div>
                                        <div>
                                            <select name="size" class="size">
                                                <option value="xs">xs</option>
                                                <option value="s">s</option>
                                                <option value="m">m</option>
                                                <option value="l">l</option>
                                                <option value="xl">l</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class = "popup-label" style="width: 6vw;">
                                        <div class = "divLabel">
                                            <label>color</label>
                                        </div>
                                        <div>
                                            <input type="text" class="color" placeholder="" name="color"/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class = "popup-label" style="width: 6vw;">
                                        <div class = "divLabel">
                                            <label>quantity in stock</label>
                                        </div>
                                        <div>
                                            <input type="text" class="stock" placeholder="" name="quantity in stock"/>
                                        </div>
                                    </div>    
                                    
                                    <div class = "popup-label" style="width: 6vw;">
                                        <div class = "divLabel">
                                            <label>quantity sold</label>
                                        </div>
                                        <div>
                                            <input type="text" class="sold" placeholder="" name="quantity sold"/>
                                        </div>
                                    </div>  
                                </div>
                            </div>

                            <div style="width:35%; float:left;">
                                <div class = "divPopUp">
                                    <div class = "popup-label" style="width: 6vw; margin-right: -1vw;">
                                        <div class = "divLabel">
                                            <label>ID</label>
                                        </div>
                                        <div>
                                            <input type="text" class="id" placeholder="" name="id"/>
                                        </div>
                                    </div>

                                    <div class = "popup-label" style="width: 10vw; margin-right: -1vw;">
                                        <div class = "divLabel">
                                            <label>name</label>
                                        </div>
                                        <div>
                                            <input type="text" class="name" placeholder="" name="name"/>
                                        </div>
                                    </div>
                                </div>

                                <div class = "popup-label" style="width: 10vw; margin-right: -1vw;">
                                    <div class = "divLabel">
                                        <label>product</label>
                                    </div>
                                    <div>
                                        <input type="text" class="product" placeholder="" name="product"/>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        
                        <div class = "divPopUp">
                             <p style = "margin-top:10px;">
                                <input class = "saveEdit" type="submit" value="Save" name="commit" id="message_submit"/>
                                <button class="cancelEdit"><a class="cancelInsert" href="/">Cancel</a></button>
                            </p>
                        </div>
                    </form>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Products Table</strong>
                        </div>
                        <div class="row" style=" display:flex; justify-content:center;">
                            
                            <div class="col-sm-12 col-md-6">
                                <div id="bootstrap-data-table_filter" class="dataTables_filter" style="float: left;">
                                    <label style="font-weight: 400;">Search:
                                        <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="bootstrap-data-table">
                                    </label>
                                </div>
                            </div>
                            <div class = "col-sm-12 col-md-6"> 
                                <button class="addProduct" style="margin-top:20px;"><a href="/NewProd" id="NewProd">Add New Product</a></button>
                            </div>
                        </div>
                            
                        <div class="table-stats order-table ov-h">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="avatar">image</th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Product</th>
                                        <th>Size</th>
                                        <th>Color</th>
                                        <th>quantity in stock</th>
                                        <th>quantity sold</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="avatar">
                                            <div class="round-img">
                                                <a href="#"><img src='../../public/assets/images/product-01.jpg'  alt=""></a>
                                            </div>
                                        </td>
                                        <td> <span class="id">1</span></td>
                                        <td> <span class="name">Esprit Ruffle Shirt</span> </td>
                                        <td> <span class="product">Product</span> </td>
                                        <td> <span class="size">S</span> </td>
                                        <td> <span class="color">Green</span> </td>
                                        <td> <span class="stock">231</span></td>
                                        <td> <span class="sold">100</span></td>
                                        <td>
                                            <button><a href="/editProd" class="badge badge-complete editProd">edit</a></button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="avatar">
                                            <div class="round-img">
                                                <a href="#"><img src='../../public/assets/images/product-01.jpg'  alt=""></a>
                                            </div>
                                        </td>
                                        <td> <span class="id">2</span></td>
                                        <td> <span class="name">Esprit Ruffle Shirt</span> </td>
                                        <td> <span class="product">Product</span> </td>
                                        <td> <span class="size">L</span> </td>
                                        <td> <span class="color">Green</span> </td>
                                        <td> <span class="stock">231</span></td>
                                        <td> <span class="sold">100</span></td>
                                        <td>
                                            <button><a href="/editProd" class="badge badge-complete editProd">edit</a></button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="avatar">
                                            <div class="round-img">
                                                <a href="#"><img src='../../public/assets/images/product-02.jpg'  alt=""></a>
                                            </div>
                                        </td>
                                        <td> <span class="id">3</span></td>
                                        <td> <span class="name">Herschel supply</span> </td>
                                        <td> <span class="product">Product</span> </td>
                                        <td> <span class="size">M</span> </td>
                                        <td> <span class="color">Blue</span> </td>
                                        <td> <span class="stock">231</span></td>
                                        <td> <span class="sold">100</span></td>
                                        <td>
                                            <button><a href="/editProd" class="badge badge-complete editProd">edit</a></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> 
                    </div>
                </div>   
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
    name:'ManageProducts'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>