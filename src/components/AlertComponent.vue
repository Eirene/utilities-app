<script setup>
import {useStore} from 'vuex';

const store = useStore();

const showAlert = ((text, color) => {
  store.dispatch('alert/setAlert', {
    text: text,
    type: color,
  });
})
</script>

<template>

  <div class="flex justify-center gap-x-4 text-center mt-8">
    <button class="inline-flex items-center px-6 py-3 text-base font-medium
                  rounded-md shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent
                  text-white
                  bg-gradient-to-r from-pink-500 via-rose-500 to-red-500" type="button"
            @click.prevent="showAlert('Warning!', 'red')"
    >
      Show Alert Red
    </button>
    <button class="inline-flex items-center px-6 py-3 text-base font-medium
                  rounded-md shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent
                  text-white
                  bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500" type="button"
            @click.prevent="showAlert('Info!', 'blue')"
    >
      Show Alert Blue
    </button>
    <button class="inline-flex items-center px-6 py-3 text-base font-medium
                  rounded-md shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent
                  text-white
                  bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500" type="button"
            @click.prevent="showAlert('Success!', 'green')"
    >
      Show Alert Green
    </button>
  </div>
</template>
