<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/solid";

defineProps({
  todoList: Object,
})
</script>


<template>
  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
    <table class="min-w-full divide-y divide-gray-300">
      <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Id</th>
        <th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">UserId</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
        <th scope="col" class="py-3.5 pr-4 pl-3 text-center text-sm font-semibold text-gray-900">Completed</th>
      </tr>
      </thead>
      <tbody class="bg-white">
      <tr v-for="todo in todoList" :key="todo.id" :class="todo.id % 2 === 0 ? undefined : 'bg-gray-50'">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6">{{ todo.id }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">{{ todo.userId }}</td>
        <td class="px-3 py-4 text-left text-sm text-gray-500">{{ todo.title }}</td>
        <td class="whitespace-nowrap py-4 pr-4 pl-3 text-sm text-gray-500 text-center">
          <CheckCircleIcon v-if="todo.completed"
                           class="inline-block h-5 w-5 text-green-400" aria-hidden="true" />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
