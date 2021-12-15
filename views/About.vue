<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{getUser}}</p>
  </div>
</template>

<script>
// import store from '../store/index'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data(){
    return{
      userData: ""
    }
  },
  // created(){
  //   this.userData = store.state.user
  // },
  computed: mapGetters(['getUser'])
}
</script>
