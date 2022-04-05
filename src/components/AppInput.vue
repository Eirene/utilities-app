<script setup>

</script>

<template>
  <label>Email</label>
  <div class="mt-1 relative rounded-md shadow-sm">
    <input placeholder="test@test.com" class="h-10 tailwind-input" />
  </div>
  <slot></slot>
  <p class="mt-2 text-sm text-red-600">Text error</p>
</template>
