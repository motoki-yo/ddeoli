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
                    <li><a class="text-dark" href = "/manageProducts">manage products</a></li>
                    <li><a class="text-dark" style="text-decoration: overline;" href = "/admEdit">administrators</a></li>
                    <li><a class="text-dark" href = "/">LOGOUT</a></li>
                </ul>
            </div>
            
            <div id = "idDivAccount">
                <div id = accountInformation>
                    <p>
                    </p> 
                </div>
                <!--Edit Adm-->
                <div class="editPop popEditAdm">
                    <!--Image Upload-->
                    <form method="post" id="edit_product" action="/editAdm">
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
                                            <label>email</label>
                                        </div>
                                        <div>
                                            <input type="text" class="email" placeholder="" name="email"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class = "divPopUp" style ="margin-top:-15px;">
                                    <div class = "popup-label" style="width: 6vw;">
                                        <div class = "divLabel">
                                            <label>First Name</label>
                                        </div>
                                        <div>
                                            <input type="text" class="firstName" placeholder="" name="First Name"/>
                                        </div>
                                    </div>

                                    <div class = "popup-label" style="width: 6vw;">
                                        <div class = "divLabel">
                                            <label>Last Name</label>
                                        </div>
                                        <div>
                                            <input type="text" class="lastName" placeholder="" name="Last Name"/>
                                        </div>
                                    </div>    
                                    
                                    <div class = "popup-label" style="width: 10vw;">
                                        <div class = "divLabel">
                                            <label>Mobile Number</label>
                                        </div>
                                        <div>
                                            <input type="text" class="mobileNumber" placeholder="" name="Mobile Number"/>
                                        </div>
                                    </div> 
                                    
                                </div>
                        </div>
                        
                        <div class = "divPopUp">
                             <p style = "margin-top:10px;">
                                <input class = "saveEdit" type="submit" value="Save" name="commit" id="message_submit"/>
                                <button class="cancelEdit"><a class="canceleditAdm" href="/">Cancel</a></button>
                            </p>
                        </div>
                    </form>
                </div>

                <!--Add New Adm-->
                <div class="editPop popAddAdm">
                    <!--Image Upload-->
                    <form method="post" id="edit_product" action="/editAdm">
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
                                            <label>email</label>
                                        </div>
                                        <div>
                                            <input type="text" class="email" placeholder="" name="email"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class = "divPopUp" style ="margin-top:-15px;">
                                    <div class = "popup-label" style="width: 6vw;">
                                        <div class = "divLabel">
                                            <label>First Name</label>
                                        </div>
                                        <div>
                                            <input type="text" class="firstName" placeholder="" name="First Name"/>
                                        </div>
                                    </div>

                                    <div class = "popup-label" style="width: 6vw;">
                                        <div class = "divLabel">
                                            <label>Last Name</label>
                                        </div>
                                        <div>
                                            <input type="text" class="lastName" placeholder="" name="Last Name"/>
                                        </div>
                                    </div>    
                                    
                                    <div class = "popup-label" style="width: 10vw;">
                                        <div class = "divLabel">
                                            <label>Mobile Number</label>
                                        </div>
                                        <div>
                                            <input type="text" class="mobileNumber" placeholder="" name="Mobile Number"/>
                                        </div>
                                    </div> 
                                    
                                </div>
                        </div>

                        <div>
                            <div class = "divPopUp" style ="margin-top:5px;">
                                    <div class = "popup-label" style="width: 10vw;">
                                        <div class = "divLabel">
                                            <label>Password</label>
                                        </div>
                                        <div>
                                            <input type="password" class="password inputPassword" placeholder="" name="password">
                                        </div>
                                    </div>

                                    <div class = "popup-label" style="width: 10vw;">
                                        <div class = "divLabel">
                                            <label>Confirm Password</label>
                                        </div>
                                        <div>
                                            <input type="password" class="repeatPassword inputPassword" placeholder="" name="password">
                                        </div>
                                    </div>    
                                </div>
                        </div>
                        
                        <div class = "divPopUp">
                             <p style = "margin-top:10px;">
                                <input class = "saveEdit" type="submit" value="Save" name="commit" id="message_submit"/>
                                <button class="cancelEdit"><a class="cancelAddtAdm" href="/">Cancel</a></button>
                            </p>
                        </div>
                    </form>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Administrators Table</strong>
                        </div>
                        <div class="row" style="margin-left: 5px; display:flex; justify-content:center;">
                            
                            <div class="col-sm-12 col-md-6">
                                <div id="bootstrap-data-table_filter" class="dataTables_filter" style="float: left;">
                                    <label style="font-weight: 400;">Search:
                                        <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="bootstrap-data-table">
                                    </label>
                                </div>
                            </div>
                            <div class = "col-sm-12 col-md-6"> 
                                <button class="addProduct" style="margin-top:20px;"><a href="/addAdm" id="addAdm">Add new administrator</a></button>
                            </div>
                        </div>
                            
                        <div class="table-stats order-table ov-h">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="avatar">image</th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>email</th>
                                        <th>Mobile number</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="avatar">
                                            <div class="round-img">
                                                <a href="#"><img src=''  alt=""></a>
                                            </div>
                                        </td>
                                        <td> <span class="id">1</span></td>
                                        <td> <span class="name">Adm 2</span> </td>
                                        <td> <span class="email">adm1@gmail.com</span> </td>
                                        <td> <span class="mobileNumber">+55099999999999</span> </td>
                                        <td>
                                            <button><a class="badge badge-complete" href = "/admInfo">you</a></button>
                                        </td>
                                    </tr>

                                     <tr>
                                        <td class="avatar">
                                            <div class="round-img">
                                                <a href="#"><img src=''  alt=""></a>
                                            </div>
                                        </td>
                                        <td> <span class="id">2</span></td>
                                        <td> <span class="name">Adm 1</span> </td>
                                        <td> <span class="email">adm2@gmail.com</span> </td>
                                        <td> <span class="mobileNumber">+55099999999999</span> </td>
                                        <td>
                                            <button><a href="/editAdm" class="badge badge-complete editAdm">edit</a></button>
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
    name:'admEdit'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../public/assets/css/to-fix.css';
</style>