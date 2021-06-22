<template>
<div>
    <h2>Dashboard</h2>
    <p>Welcome</p>
</div>   
</template>

<script>
const axios = require('axios');
export default {
    data(){
        return{

        }
    },
    mounted(){
      this.checkLoginIn();
    },
    methods: {
        checkLoginIn : function(){
          let token = window.localStorage.getItem('token');
          if(token == null){
            this.$router.push({name : 'login'})
          }
          axios.get('http://localhost/api/user', 
                {headers: {Authorization: 'Bearer '+ token}}
          )
            .then(function (response) {
              console.log(response);
            })
            .catch(() => {
              this.$router.push({name : 'login'})
            })
            }
    }
}
</script>
