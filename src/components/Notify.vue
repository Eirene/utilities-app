<template>
  <!--  <ul class="animate-pulse animate-pulse-once">-->
  <ul>
    <li v-for="(message, index) in messages" :key="index" class="px-4 py-2">
      {{ message.title }}
    </li>
  </ul>

  <div class="text-center mt-3 mb-6">
    <button @click="loadMore" :disabled="maxLength === 0" type="button"
      class="tailwind-btn-primary" :class="{ 'disabled:bg-opacity-40': maxLength === 0 }">
      Load More
    </button>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  computed: {
    maxLength() {
      return this.$store.getters.getMessageFilter.length;
    },
  },
  methods: {
    loadMore() {
      this.$store.dispatch("loadMessages").catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style lang="sass"></style>
