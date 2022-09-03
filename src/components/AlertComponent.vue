<script setup>
import {useStore} from 'vuex';

const store = useStore();

const showAlert = (() => {
  store.dispatch('alert/setAlert', {
    text: 'This is my alert!',
    type: 'green',
  });
})
</script>

<template>

  <div class="text-center mt-8">
    <button class="inline-flex items-center px-6 py-3 text-base font-medium
                  rounded-md shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500
                  text-amber-50 bg-gradient-to-r from-amber-400 to-amber-500
                  hover:from-amber-500 hover:to-amber-500" type="button"
            @click.prevent="showAlert"
    >
      Show Alert
    </button>
  </div>
</template>
