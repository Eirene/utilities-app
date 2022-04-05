<script setup>
import { CheckCircleIcon } from "@heroicons/vue/solid";
import AppInput from "./AppInput.vue";

</script>

<template>
  <p class="flex items-center justify-center text-sm mb-2">
    <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
    This form uses Component with VeeValidate and Maska
  </p>
  <p class="flex items-center justify-center text-sm mb-4">
    <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
    You can click on the hints to fill out faster
  </p>

  <div class="max-w-md mx-auto mb-12 p-8 bg-cyan-100 rounded-2xl text-cyan-900">
    <form action="">
      <app-input>
        <p class="mx-3 inline-block text-sm text-gray-500
                  hover:text-gray-800 cursor-pointer border-b border-dashed">test@test.com</p>
      </app-input>
    </form>
  </div>
</template>
