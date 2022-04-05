<script setup>
import { ref, onMounted, reactive, computed, watch } from 'vue';
import { useStore } from "vuex";
import axios from "axios";
import AppPagination from "../components/AppPagination.vue";
import TodoTable from "../components/TodoTable.vue";

const store = useStore();
const loading = ref(false);
const todoListFiltered = computed(() => store.state.todo.todoFiltered);

const meta = reactive({
  current_page: 1,
  from: 1,
  to: 5,
  last_page: 1,
  per_page: 5,
  total: 0,
});

const loadTodoList = (() => {
  loading.value = true;
  axios
    .get("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then((response) => {
      let listAll = response.data;
      let listFiltered = listAll.filter((item => item.id >= meta.from && item.id <= meta.to));

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

const pageClick = ((page) => {
  meta.current_page = page;
  meta.from = (meta.per_page * (meta.current_page - 1)) + 1;
  meta.to = (meta.from + meta.per_page) - 1;
});

watch(meta, (meta) => {
  let fromStore = store.state.todo.todo;
  let listFilteredUpdate = fromStore.filter((item => item.id >= meta.from && item.id <= meta.to));

  store.dispatch('setTodoFiltered', listFilteredUpdate);
})

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

    <todo-table v-else :todoList="todoListFiltered" />

    <app-pagination :meta="meta" @pageClickEvent="pageClick" />
  </div>
</template>
