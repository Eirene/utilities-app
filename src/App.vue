<script setup>
import AppAlert from "./components/AppAlert.vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Nav/>
    <main>
      <div :class="($route.name !== 'Trello') ? 'container' : 'px-8'" class="mx-auto py-10 px-4">
        <router-view/>
      </div>
    </main>
    <Footer/>
  </div>

  <div id="modal"></div>
  <app-alert />
</template>
