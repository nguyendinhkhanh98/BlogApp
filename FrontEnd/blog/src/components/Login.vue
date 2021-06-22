<template>
<div class="container">
<div class="row">
    <form class= "col-4 mx-auto bordered mt-5" @submit.prevent="login()">
        <h2>Login</h2>
    <div class="form-group">
        <label for="email">Email address</label>
        <input v-model="user.email" name="email" class="form-control is-invalid" :class="{'is-invalid': errors.email}">
        <div v-if="errors.email" class="invalid-feedback">{{errors.email[0]}}</div>
    </div>
    <div class="form-group">
        <label>Password</label>
        <input v-model="user.password" type="password" name="password" class="form-control" >
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>   
</template>

<script>
const axios = require('axios');
export default{
    data(){
        return{
            user:{
                email:'',
                password:''
            }

        }
        errors:{}
    },
    methods: {
        login: function(){
            this.loading = true;
            axios.post('http://localhost/api/login', this.user) 
            .then(response=> {
                window.localStorage.setItem('token', response.data.token);
                this.router.push({name:'dashboard'});
            })
            .catch(error=> {
                this.loading = false;
                this.errors = error.response.data.errors;
  });
        }
    }
}
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css'
</style>
