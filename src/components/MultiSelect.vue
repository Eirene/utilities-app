<template>
  <div class="text-center mx-auto max-w-xl mb-12">
    <p class="text-sm text-gray-500 mb-2">MultiSelect: {{ multiselectValue }}</p>
    <Multiselect v-model="multiselectValue" mode="tags" :options="options" />
  </div>
</template>

<script>
import { ref, toRef, watch } from "vue";
import Multiselect from  "@vueform/multiselect";

export default {
  name: "MultiSelect",
  components: {
    Multiselect,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  setup(props, context) {
    const multiselectValue = ref([]);
    const options = toRef(props, 'items');

    watch(multiselectValue, (multiselectValue) => {
      context.emit('update:modelValue', multiselectValue)
    })

    return {
      multiselectValue,
      options,
    };
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
