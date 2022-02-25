<script setup>
import { useRouter } from 'vue-router';
import { useTrello } from "../use/useTrello";

const router = useRouter();

const { moveTaskOrColumn } = useTrello();

defineProps({
  column: Object,
  task: Object,
  board: Object,
  taskIndex: Number,
  columnIndex: Number,
})

const goToTask = ((task) => {
  router.push({name: 'task', params: {id: task.id}})
})

const pickupTask = ((e, taskIndex, fromColumnIndex) => {
  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.dropEffect = 'move'
  e.dataTransfer.setData('from-task-index', taskIndex)
  e.dataTransfer.setData('from-column-index', fromColumnIndex)
  e.dataTransfer.setData('type', 'task')
})
</script>

<template>
  <div
      class="task"
      draggable="true"
      @dragover.prevent
      @dragenter.prevent
      @dragstart="pickupTask($event, taskIndex, columnIndex)"
      @drop.stop="moveTaskOrColumn($event, column.tasks, columnIndex, taskIndex)"
      @click="goToTask(task)">
    <span class="w-full flex-no-shrink font-bold">{{ task.name }}</span>
    <p v-if="task.description"
       class="w-full flex-no-shrink mt-1 text-sm">
      {{ task.description }}
    </p>
  </div>
</template>
