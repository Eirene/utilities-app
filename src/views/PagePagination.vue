<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useStore } from "vuex";
import axios from "axios";
import AppPagination from "../components/AppPagination.vue";
import TodoTable from "../components/TodoTable.vue";

const store = useStore();
const loading = ref(false);

const todoList = store.state.todo.todo;
const todoListFiltered = store.state.todo.todoFiltered;

console.log('todoList', todoList)
console.log('todoListFiltered', todoListFiltered)

const meta = reactive({
  current_page: 1,
  from: 1,
  last_page: 1,
  per_page: 5,
  to: 1,
  total: 0,
});

const loadTodoList = (() => {
  loading.value = true;
  axios
    .get("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then((response) => {
      let listAll = response.data;
      let listFiltered = listAll.filter((item => item.id >= meta.from && item.id <= meta.per_page));

      meta.total = listAll.length;
      meta.last_page = listAll.length/meta.per_page;

      store.dispatch('setTodo', listAll);
      store.dispatch('setTodoFiltered', listFiltered);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      loading.value = false;
    });
});

onMounted(() => {
  loadTodoList();
});
</script>

<template>
  <div class="text-center mx-auto max-w-2xl py-4 mb-12">

    <!-- preloader -->
    <div v-if="loading" class="animate-pulse">
      <div class="h-4 m-4 block bg-gray-200 rounded"></div>
      <div class="h-4 m-4 block bg-gray-200 rounded"></div>
      <div class="h-4 m-4 block bg-gray-200 rounded"></div>
    </div>

    <todo-table :todoList="todoListFiltered" />

    <app-pagination :meta="meta" />
  </div>
</template>
