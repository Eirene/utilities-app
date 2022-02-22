<script setup>
import { ref } from "vue";
import { TrashIcon } from "@heroicons/vue/outline";

const filelist = ref([]);
const inputFile = ref(null)

const onChange = (() => {
  filelist.value = [...inputFile.value.files];
})
const remove = ((i) => { filelist.value.splice(i, 1); })
const dragover = ((event) => {
  if (!event.currentTarget.classList.contains("bg-green-100")) {
    event.currentTarget.classList.remove("bg-gray-100");
    event.currentTarget.classList.add("bg-green-100");
  }
})
const dragleave = ((event) => {
  event.currentTarget.classList.add("bg-gray-100");
  event.currentTarget.classList.remove("bg-green-100");
})

const drop = ((event) => {
  inputFile.value.files = event.dataTransfer.files;
  onChange()
  event.currentTarget.classList.add("bg-gray-100");
  event.currentTarget.classList.remove("bg-green-100");
})
</script>

<template>
  <div @dragover.prevent="dragover" @dragenter.prevent @dragleave.prevent="dragleave" @drop.prevent="drop"
         class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-gray-100 max-w-lg mx-auto mb-12">
      <div class="space-y-1 text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="text-sm text-gray-600">
          <label for="assetsFieldHandle" class="relative cursor-pointer font-medium">
            <span class="text-indigo-600 hover:text-indigo-500">Upload a file</span>
            <input type="file" multiple id="assetsFieldHandle" ref="inputFile" accept=".pdf,.jpg,.jpeg,.png"
                   @change="onChange" class="sr-only" />
          </label>
          <span class="pl-1">or drag and drop</span>
        </div>
        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>

        <ul class="mt-4 inline-block" v-if="filelist.length" v-cloak>
          <li class="text-sm p-1 text-left" v-for="(file, index) in filelist" :key="index">
            <span>{{ file.name }}</span>
            <TrashIcon class="inline ml-3 cursor-pointer h-5 w-5 text-red-500" @click="remove(index)" />
          </li>
        </ul>
      </div>
    </div>
</template>
