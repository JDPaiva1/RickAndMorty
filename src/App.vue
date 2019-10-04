<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'RickAndMorty',
  components: { Navbar, Footer },
};
</script>

<style>
#app {
  text-align: center;
  color: #18192B;
  background-color: #0FAEBF;
}
.btn.btn-success {
  background-color: #41A632;
}
.border-success {
  border-color: #41A632;
}
hr.long {
  max-width: 8em;
}
</style>
