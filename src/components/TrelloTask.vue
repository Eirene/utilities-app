<script setup>
import { computed } from "vue";
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const task = computed(() => store.getters['trello/getTask'](route.params.id));
</script>

<template>
  <div class="task-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      here is task content
      <input type="text" class="p-2 w-full mr-2 block text-xl font-bold" :value="task.name">
      <textarea class="relative w-full bg-transparent px-2 border mt-2 h-64 border-none leading-normal" />
    </div>
  </div>
</template>

<style lang="scss">
.task-view {
  @apply relative flex flex-row bg-white mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
