<script setup>
import { ref } from "vue";

import FileUpload from "../components/FileUpload.vue";
import Collections2Wallet from "../components/Collections2Wallet.vue";
import MultiSelect from "../components/MultiSelect.vue";
import GithubSearch from "../components/GithubSearch.vue";

const multiSelect = ref(null);
const multiSelectOptions = ["Batman", "Robin", "Joker"];

defineExpose({
  multiSelect, multiSelectOptions
})
</script>

<template>
  <collections2-wallet />
  <github-search />
  <multi-select v-model="multiSelect" :items="multiSelectOptions"></multi-select>
  <file-upload />
</template>
