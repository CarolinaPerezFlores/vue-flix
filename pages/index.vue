<template>
  <!-- <Home/> -->
  <div>
      <v-app>
        <Navbar/>

          <Home/>

      </v-app>
  </div>
  
</template>

<script>
import Home from './Home.vue';
import Navbar from '../components/Navbar.vue'
export default {
  name: 'IndexPage',
  components: {
        Navbar,
        Home
    },
}
</script>
