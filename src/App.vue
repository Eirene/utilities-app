<template>
  <div class="min-h-screen flex flex-col">
    <Nav />
    <main>
      <div class="mx-auto py-10 px-4" :class="($route.name !== 'Trello') ? 'container' : 'px-8'">
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
