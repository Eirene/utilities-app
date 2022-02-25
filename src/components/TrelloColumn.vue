<script setup>
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { useTrello } from "../use/useTrello";
import TrelloColumnTask from "./TrelloColumnTask.vue";

const store = useStore();
const router = useRouter();
const board = store.state.trello.board;

const { moveTaskOrColumn } = useTrello();

defineProps({
  column: Object,
  columnIndex: Number,
})

const createTask = ((e, tasks) => {
  store.commit('trello/CREATE_TASK', {
    tasks,
    name: e.target.value,
  })
  e.target.value = ''
})

const pickupColumn = ((e, fromColumnIndex) => {
  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.dropEffect = 'move'
  e.dataTransfer.setData('from-column-index', fromColumnIndex)
  e.dataTransfer.setData('type', 'column')
})
</script>

<template>
  <div class="columns"
       draggable="true"
       @drop="moveTaskOrColumn($event, column.tasks, columnIndex, 0)"
       @dragover.prevent
       @dragenter.prevent
       @dragstart.self="pickupColumn($event, columnIndex)">
    <div class="flex items-center mb-2 font-bold text-cyan-50">{{ column.name }}</div>

    <trello-column-task
        :task="task"
        :taskIndex="$taskIndex"
        :column="column"
        :columnIndex="columnIndex"
        :board="board"
        v-for="(task, $taskIndex) in column.tasks"
        :key="$taskIndex" />

    <input @keyup.enter="createTask($event, column.tasks)"
           type="text"
           placeholder="+ Enter new task"
           class="new-task">
  </div>
</template>


<style lang="scss">
.columns{
  @apply bg-cyan-400 p-2 mr-4 text-left shadow rounded w-80;
  min-width: 20rem;
}
</style>
