<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="relative">
    <input :type="type"
           :placeholder="placeholder"
           @input="$emit('update:modelValue', $event.target.value)"
           :value="modelValue"
           class="tailwind-input" />
    <slot name="icon"></slot>
  </div>
  <slot name="helptext"></slot>
</template>
