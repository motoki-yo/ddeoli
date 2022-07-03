var app = new Vue({
    el: '#app',
    data: {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        repeatPassword: '',
    
        validation: {
            invalid: {
            },
            valid: {
            },
        }
    },
    methods: {
        validate: function () {
            
    
            if (!this.firstName) {
                this.validation.invalid.firstName = 'First Name Required';
                document.getElementById("firstName").style.border = "2px solid";
                document.getElementById("firstName").style.borderColor = "rgb(144, 13, 13)";
            }else{
                this.validation.invalid.firstName = '';
                document.getElementById("firstName").style.border = "0 none";
            }
            
            if (!this.lastName){
                this.validation.invalid.lastName = 'Last Name Required';
                document.getElementById("lastName").style.border = "2px solid";
                document.getElementById("lastName").style.borderColor = "rgb(144, 13, 13)";
            }else{
                this.validation.invalid.lastName = '';
                document.getElementById("lastName").style.border = "0 none";
            }
            
            if (!this.email) {
                this.validation.invalid.email = 'Email Required';
                document.getElementById("email").style.border = "2px solid";
                document.getElementById("email").style.borderColor = "rgb(144, 13, 13)";
            }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                this.validation.invalid.email = 'Valid format name@site.(com|edu|br)';
                document.getElementById("email").style.border = "2px solid";
                document.getElementById("email").style.borderColor = "rgb(144, 13, 13)";
            }else{
                this.validation.invalid.email = '';
                document.getElementById("email").style.border = "0 none";
            }

            if (!this.password){
                this.validation.invalid.password = "Password Required";
                document.getElementById("password").style.border = "2px solid";
                document.getElementById("password").style.borderColor = "rgb(144, 13, 13)";
            }else if (!/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(this.password)) {
                this.validation.invalid.password = "";
                document.getElementById("password").style.border = "2px solid";
                document.getElementById("password").style.borderColor = "rgb(144, 13, 13)";
            }else{
                this.validation.invalid.password = "";
                document.getElementById("password").style.border = "0 none";
            }

            if(!this.repeatPassword){
                this.validation.invalid.repeatPassword = "Confirm Password Required";
                document.getElementById("repeatPassword").style.border = "2px solid";
                document.getElementById("repeatPassword").style.borderColor = "rgb(144, 13, 13)";
            }else if(this.repeatPassword != this.password){
                this.validation.invalid.repeatPassword = "Passwords don't match";
                document.getElementById("repeatPassword").style.border = "2px solid";
                document.getElementById("repeatPassword").style.borderColor = "rgb(144, 13, 13)";
            }else{
                this.validation.invalid.repeatPassword = '';
                document.getElementById("repeatPassword").style.border = "0 none";
            }

            if(this.firstName && this.lastName && (/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(this.password)) 
                && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
                && this.repeatPassword == this.password)
                location = 'verifyEmail.html';             
            //forçar o update depois que od dados inseridos forem atualizados
            this.$forceUpdate();
        },
        clearValidation: function(field) {
            this.validation.valid[field] = '';
            this.validation.invalid[field] = '';
            this.$forceUpdate();
        }
        
    },
    
});

