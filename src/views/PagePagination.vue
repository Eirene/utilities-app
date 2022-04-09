<script setup>
import { ref, onMounted, reactive, computed } from 'vue';
import { useStore } from "vuex";
import axios from "axios";
import AppPagination from "../components/AppPagination.vue";
import TodoTable from "../components/TodoTable.vue";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();
const loading = ref(false);
const todoListFiltered = computed(() => store.state.todo.todoFiltered);

const meta = reactive({
  current_page: Number(route.query.page) || 1,
  per_page: 7,
  total: null,
});

meta.from = (meta.current_page - 1) * meta.per_page + 1;
meta.to = meta.from + meta.per_page - 1;

const filterList = (list => list.filter((item => item.id >= meta.from && item.id <= meta.to)));

const loadTodoList = (() => {
  loading.value = true;
  axios
    .get("https://jsonplaceholder.typicode.com/todos?userId=1")
    // .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      let listAll = response.data;
      let listFiltered = filterList(listAll);

      meta.total = listAll.length;
      meta.last_page = Math.ceil(listAll.length/meta.per_page);

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

const getTodoList = ((page = Number(route.query.page)) => {
  if (page <= 0 || page > meta.last_page) return
  router.replace({
    query: {
      page: page
    }
  });
  meta.current_page = page;
  meta.from = (meta.per_page * (meta.current_page - 1)) + 1;
  meta.to = (meta.from + meta.per_page - 1 > meta.total) ? meta.total : meta.from + meta.per_page - 1;
  store.dispatch('setTodoFiltered', filterList(store.state.todo.todo));
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

    <app-pagination :meta="meta" @pageClickEvent="getTodoList" />
  </div>
</template>
