<script setup>
const resize = (e) => {
  e.target.style.height = 'auto'
  e.target.style.height = `${e.target.scrollHeight}px`
}

defineProps({
  modelValue: String,
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label for="comment-autoresize" class="block text-sm font-medium text-gray-700">
      Add your text to see how textarea will be automatically resize
    </label>
    <div class="mt-1">
      <textarea rows="4" name="comment-autoresize" id="comment-autoresize"
                @input="$emit('update:modelValue', $event.target.value); resize($event)"
                :value="modelValue"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
    </div>
  </div>
</template>
