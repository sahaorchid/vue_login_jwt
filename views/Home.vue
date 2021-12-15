<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{userData}}</p>
  </div>
</template>

<script>
import store from '../store/index'
export default {
  name: 'Home',
  data(){
    return{
      userData: store.state.user
    }
  }
}
</script>
