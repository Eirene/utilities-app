<script setup>
import {CheckCircleIcon, InformationCircleIcon, XCircleIcon, XMarkIcon} from '@heroicons/vue/24/solid';
import {useStore} from 'vuex';
import {computed} from 'vue';

const store = useStore();
const alert = computed(() => store.getters['alert/getAlert']);

const closeAlert = (() => {
  store.dispatch('alert/closeAlert');
})
</script>

<template>
  <transition name="bounce">
    <div v-if="alert.isOpen" class="fixed top-10 z-50 text-center w-full flex justify-center">
      <div
          :class="{
          'bg-green-50 text-green-700': alert.type === 'green',
          'bg-red-50 text-red-700': alert.type === 'red',
          'bg-blue-50 text-blue-700': alert.type === 'blue',
        }"
          class="rounded py-4 px-6 shadow"
      >
        <div class="flex items-center">
          <div class="flex-shrink-0 h-5 w-5">
            <XCircleIcon v-if="alert.type === 'red'" aria-hidden="true" class="h-5 w-5 text-red-400"/>
            <CheckCircleIcon v-if="alert.type === 'green'" aria-hidden="true" class="h-5 w-5 text-green-400"/>
            <InformationCircleIcon v-if="alert.type === 'blue'" aria-hidden="true" class="h-5 w-5 text-blue-400"/>
          </div>
          <div class="ml-3">
            {{ alert.text }}
          </div>
          <div class="ml-auto pl-3">
            <button
                :class="{
                  'bg-green-50 text-green-500': alert.type === 'green',
                  'bg-red-50 text-red-500': alert.type === 'red',
                  'bg-blue-50 text-blue-500': alert.type === 'blue',
                }"
                class="inline-flex rounded p-1.5 focus:outline-none focus:ring-1 focus:ring-offset-1"
                type="button"
                @click="closeAlert"
            >
              <span class="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" class="h-5 w-5"/>
            </button>
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
