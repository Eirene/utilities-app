<template>
  <div class="min-h-screen flex flex-col">
    <Nav />
    <main>
      <div class="container mx-auto pt-10">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>

  <div id="modal"></div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>
