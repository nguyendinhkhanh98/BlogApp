<template>
<div class="contaienr">
  <div class="row">
    <h2>Dashboard</h2>
    <form class= "col-8 mx-auto bordered mt-5" @submit.prevent="createPost()">
        <div class="form-group">
            <label for="title">Title:</label>
            <input v-model="user.title" name="title" class="form-control is-invalid" :class="{'is-invalid': errors.title}">
            <div v-if="errors.title" class="invalid-feedback">{{errors.title[0]}}</div>
        </div>
        <div class="form-group">
            <label for="content">Content:</label>
            <textarea v-model="user.content" name="content" class="form-control is-invalid" :class="{'is-invalid': errors.content}" rows="15"></textarea>
            <div v-if="errors.content" class="invalid-feedback">{{errors.content[0]}}</div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div> 
</div>  
</template>

<script>

import BaseRequest from '../core/BaseRequest.js';

export default {
    data(){
        return{
          post: {
            title: '',
            content: ''
          },
          errors: {}
        }
    },
    mounted(){
      this.checkLoginIn();
    },
    methods: {
        checkLoginIn : function(){
          BaseRequest('user')
          .then(function (response) {
            console.log(response);
          })
          .catch(() => {
          this.$router.push({name : 'login'})
          })
        },
          createPost: function(){

            BaseRequest('post',
             this.post)
            .then( ()=> {
              alert('dang bai thanh cong');
              this.post = {title : '' , content:  ''}
            })
            .catch(error=> {
                this.loading = false;
                this.errors = error.response.data.errors;
            });
          }
    }
}

</script>