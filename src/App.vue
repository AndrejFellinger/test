<script>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/menu.vue'
import Footer from './components/Footer.vue'

export default{
  components: {
    Menu,
    Footer
  }
}

</script>

<template>
  <Menu />

  <RouterView />
  
  <Footer />
</template>

<style scoped>

</style>
