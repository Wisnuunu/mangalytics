<template>
  <div id="mainlayout" class="bg-gray-800">
    <Navbar />
    <div class="h-screen">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/layout/navbar.vue';
import Footer from '../components/layout/footer.vue';

export default {
    components: { Navbar, Footer }
}
</script>

<style>

</style>