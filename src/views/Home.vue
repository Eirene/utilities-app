<script setup>
import { ref } from "vue";

import FileUpload from "../components/FileUpload.vue";
import Collections2Wallet from "../components/Collections2Wallet.vue";
import MultiSelect from "../components/MultiSelect.vue";
import GithubSearch from "../components/GithubSearch.vue";
import GrandForm from "../components/GrandForm.vue";
import TextareaAutosizing from "../components/TextareaAutosizing.vue";

const textareaAutosizing = ref('textareaAutosizing');
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
  <grand-form />

  <div class="max-w-lg mx-auto mb-12">
    <textarea-autosizing v-model="textareaAutosizing" />
    <p>Your text: {{ textareaAutosizing }}</p>
  </div>
</template>
