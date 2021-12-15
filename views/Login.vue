<template>
  <div class="hello">
    <form @submit="login">
        <input v-model="email" type="email" placeholder="email">
        <input v-model="password" type="password" placeholder="password">
        <button>Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Login',
  data(){
      return{
          email: "",
          password: "",
      }
  },
  methods: {
      login(e){
          e.preventDefault();
          axios.post('http://localhost:5000/login',{
              email: this.email,
              password: this.password
          })
          .then((res)=>{
            localStorage.setItem('token',res.data.token)
            console.log("hello")
            })
          console.log(this.email, this.password)
      },

  }
}
</script>

