<script setup>
import { computed } from "vue";
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const task = computed(() => store.getters['trello/getTask'](route.params.id));

const updateTaskProperty = ((e, key) => {
  store.commit('trello/UPDATE_TASK', {
    task,
    key,
    value: e.target.value,
  })
})
</script>

<template>
  <div class="task-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input :value="task.name" type="text"
             @change="updateTaskProperty($event, 'name')"
             @keyup.enter="updateTaskProperty($event, 'name')"
             class="p-2 w-full mr-2 block border-none text-xl font-bold">
      <textarea :value="task.description"
                @change="updateTaskProperty($event, 'description')"
                @keyup.enter="updateTaskProperty($event, 'description')"
                class="relative w-full bg-transparent px-2 mt-2 h-64 border-none leading-normal" />
    </div>
  </div>
</template>

<style lang="scss">
.task-view {
  @apply relative flex flex-row bg-white mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
