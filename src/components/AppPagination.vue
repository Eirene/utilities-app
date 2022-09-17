<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';

defineProps({
  meta: Object,
})
defineEmits(['pageClickEvent'])
</script>

<template>
  <div class="bg-white py-4 flex items-center justify-between sm:px-6 my-4">
    <div class="flex-1 flex justify-between sm:hidden">
      <a href="#"
         class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
         @click.prevent="$emit('pageClickEvent', meta.current_page - 1)"
         :class="{ 'opacity-50': meta.current_page === 1 }"
      > Previous </a>
      <a href="#"
         class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
         @click.prevent="$emit('pageClickEvent', meta.current_page + 1)"
         :class="{ 'opacity-50': meta.current_page === meta.last_page }"
      > Next </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ ' ' }}
          <span class="font-medium">{{ meta.from }}</span>
          {{ ' ' }}
          to
          {{ ' ' }}
          <span class="font-medium">{{ meta.to }}</span>
          {{ ' ' }}
          of
          {{ ' ' }}
          <span class="font-medium">{{ meta.total }}</span>
          {{ ' ' }}
          results
        </p>
      </div>
      <div>
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a href="#"
             @click.prevent="$emit('pageClickEvent', meta.current_page - 1)"
             class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
             :class="{ 'opacity-50': meta.current_page === 1 }"
          >
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </a>

          <a v-for="(page, index) in meta.last_page" :key="index"
            @click.prevent="$emit('pageClickEvent', page)"
            href="#"
            aria-current="page"
            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            :class="page === meta.current_page ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'"
          >
            {{ page }}
          </a>

          <a href="#"
             @click.prevent="$emit('pageClickEvent', meta.current_page + 1)"
             class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
             :class="{ 'opacity-50': meta.current_page === meta.last_page }"
          >
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </div>
  <p>{{ meta }}</p>
</template>
