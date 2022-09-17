<script setup>
import { ref } from 'vue';
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import AppInput from "./AppInput.vue";

const grandForm = ref('');
</script>

<template>
<!--  <p class="flex items-center justify-center text-sm mb-2">-->
<!--    <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />-->
<!--    This form uses Component with VeeValidate and Maska-->
<!--  </p>-->
<!--  <p class="flex items-center justify-center text-sm mb-4">-->
<!--    <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />-->
<!--    You can click on the hints to fill out faster-->
<!--  </p>-->
  <div class="max-w-md mx-auto mb-12 p-8 bg-cyan-100 rounded-2xl text-cyan-900">
    <form action="">
      <p class="pl-3">v-model: {{grandForm}}</p>
      <app-input v-model="grandForm" :type="'text'" :placeholder="'Placeholder text'">
        <template #header>
          <p class="mx-3 inline-block text-sm text-gray-500
                    hover:text-gray-800 cursor-pointer border-b border-dashed"
            @click.prevent="grandForm = 'test@test.com'">test@test.com</p>
        </template>
      </app-input>
    </form>
  </div>
</template>
