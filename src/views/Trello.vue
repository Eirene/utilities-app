<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router';
import TrelloColumn from "../components/TrelloColumn.vue";
import { CheckCircleIcon } from "@heroicons/vue/24/solid";

const store = useStore();
const router = useRouter();
const route = useRoute();
const board = store.state.trello.board;
const newColumnName = ref('');

const ulText = [
    'create new column, new task',
    'update task name and description',
    'drag & drop tasks and columns',
]

const isTaskOpen = computed(() => {
  return route.name === 'task'
});

const closeOpenTask = () => {
  return router.push({name: 'Trello'})
};

const createColumn = (() => {
  store.commit('trello/CREATE_COLUMN', {
    name: newColumnName.value
  })

  newColumnName.value = ''
})

</script>

<template>
  <div class="text-center mb-4">
    <div class="inline-block">
      <p class="mb-2 text-sm text-gray-500">You can:</p>
      <ul class="text-sm text-gray-500">
        <li class="my-2 flex" v-for="(text, index) in ulText" :key="index">
          <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
          {{ text }}
        </li>
      </ul>
    </div>
  </div>
  <div class="flex items-start overflow-x-auto text-gray-800">
    <trello-column :column="column"
                   :columnIndex="$columnIndex"
                   v-for="(column, $columnIndex) in board.columns"
                   :key="$columnIndex">
    </trello-column>

    <div class="columns">
      <div>
        <input type="text"
               v-model="newColumnName"
               @keyup.enter="createColumn"
               class="new-column" placeholder="New Column Name">
      </div>
    </div>

    <div v-if="isTaskOpen"
         @click.self="closeOpenTask"
         class="absolute inset-0 backdrop-blur-sm bg-black/50">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.columns{
  @apply bg-cyan-400 p-2 mr-4 text-left shadow rounded w-80;
  min-width: 20rem;
}
.task {
  @apply flex items-center flex-wrap shadow mb-2 p-2 rounded bg-white no-underline hover:cursor-pointer;
}
[type='text'].new-column{
  @apply block w-full border-0 shadow p-2 rounded bg-white no-underline
  focus:border-transparent focus:shadow-transparent focus:ring-0;
}
[type='text'].new-task{
  @apply block p-2 w-full bg-transparent text-cyan-50 border-0
  placeholder:text-cyan-50 rounded
  active:border-0 focus:border-0 hover:border-0
  active:outline-0 focus:outline-0 hover:outline-0
  focus:ring-white;
}
</style>
