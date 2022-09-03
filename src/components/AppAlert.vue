<script setup>
import { CheckCircleIcon, InformationCircleIcon, XCircleIcon, XIcon } from '@heroicons/vue/solid';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const alert = computed(() => store.getters['alert/getAlert']);
const alertText = computed(() => store.getters['alert/getAlertText']);
const alertType = computed(() => store.getters['alert/getAlertType']);

defineEmits(['closeAlertEvent']);
</script>

<template>
  <transition name="bounce">
    <div v-if="alert" class="fixed top-10 z-50 text-center w-full flex justify-center">
      <div
        :class="{
          'bg-green-50': alertType === 'green',
          'bg-red-50': alertType === 'red',
          'bg-blue-50': alertType === 'blue',
        }"
        class="rounded p-4 shadow"
      >
        <div class="flex">
          <div class="flex-shrink-0">
            <XCircleIcon v-if="alertType === 'red'" aria-hidden="true" class="h-5 w-5 text-red-400" />
            <CheckCircleIcon v-if="alertType === 'green'" aria-hidden="true" class="h-5 w-5 text-green-400" />
            <InformationCircleIcon v-if="alertType === 'blue'" aria-hidden="true" class="h-5 w-5 text-blue-400" />
          </div>
          <div class="ml-3">
            {{ alertText }}
            <slot></slot>
          </div>
          <div class="ml-auto pl-3">
            <div class="-mx-1.5 -my-1.5">
              <button
                :class="{
                  'bg-green-50 text-green-500': alertType === 'green',
                  'bg-red-50 text-red-500': alertType === 'red',
                  'bg-blue-50 text-blue-500': alertType === 'blue',
                }"
                class="inline-flex rounded p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                type="button"
                @click="closeAlert"
              >
                <span class="sr-only">Dismiss</span>
                <XIcon aria-hidden="true" class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
