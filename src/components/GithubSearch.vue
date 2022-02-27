<script setup>
import { ref } from 'vue';
import axios from 'axios';

const search = ref('')
const error = ref('')
const repos = ref(null)

const getRepos = (() => {
  axios
    .get(`https://api.github.com/users/${search.value}/repos`)
    .then((res) => {
      error.value = null;
      repos.value = res.data;
    })
    .catch((err) => {
      console.error(err);
      repos.value = null;
      error.value = "Cant find this user";
    });
})
</script>

<template>
  <div class="text-center mx-auto max-w-2xl py-4 mb-12">
    <p class="mb-2 text-sm text-gray-500">Enter username, for example <strong>Eirene</strong></p>
    <div class="max-w-sm mx-auto">
      <div class="flex">
        <!-- search -->
        <input
            @keypress.enter="getRepos"
            type="text"
            placeholder="Type username..."
            v-model="search"
            class="tailwind-input"
        />

        <button class="tailwind-btn-primary ml-3 mt-1" @click="getRepos">
          Search!
        </button>
      </div>

      <!-- error -->
      <div class="text-red-500 text-sm mt-2" v-if="error">
        <p>{{ error }}</p>
      </div>

      <!-- wrapper -->
      <div v-if="repos">
        <!-- item -->
        <div class="mt-2" v-for="repo in repos" :key="repo.id">
          <div class="flex justify-between items-center p-2 border-bottom bg-gray-50 mb-1">
            <a class="" target="_blank" :href="repo.html_url">{{ repo.name }}</a>
            <span> {{ repo.stargazers_count }} ⭐</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
