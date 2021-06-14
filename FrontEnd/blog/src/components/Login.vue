<template>
<div class="container">
<div class="row">
    <form class= "col-4 mx-auto bordered mt-5" @submit.prevent="login()">
        <h2>Login</h2>
    <div class="form-group">
        <label for="email">Email address</label>
        <input v-model="user.email" type="email" name="email" class="form-control" id="email">
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
export default{
    data(){
        return{
            user:{
                email:'',
                password:''
            }

        }
    },
    methods: {
        login: function(){
            console.log(this.user);
        }
    }
}
</script>

<style>

</style>
