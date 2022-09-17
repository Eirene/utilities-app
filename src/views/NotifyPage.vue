<template>
  <div class="max-w-lg mx-auto bg-white shadow overflow-hidden rounded-md py-2">
    <div class="my-2 mx-4 flex justify-between items-center">
      <h3 class="py-2 text-xl font-medium">Notify App</h3>
      <ArrowPathIcon
        @click="getNotifyLazy"
        class="cursor-pointer h-5 w-5 text-blue-500"
      />
    </div>

    <!-- preloader -->
    <div v-if="loading" class="animate-pulse">
      <div class="h-4 m-4 block bg-gray-200 rounded"></div>
      <div class="h-4 m-4 block bg-gray-200 rounded w-4/6"></div>
    </div>

    <Notify :messages="getMessageMain" />
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import Notify from "../components/Notify.vue";

import { ArrowPathIcon } from "@heroicons/vue/24/outline";

export default {
  components: {
    Notify,
    ArrowPathIcon,
  },
  data: () => {
    return {
      loading: false,
    };
  },
  mounted() {
    this.getNotifyLazy();
  },
  computed: {
    ...mapGetters(["getMessageMain"]),
  },
  methods: {
    getNotifyLazy() {
      this.loading = true;
      setTimeout(() => {
        this.getNotify();
      }, 1000);
    },
    getNotify() {
      this.loading = true;
      axios
        .get("https://my-json-server.typicode.com/eirene/utilities-app/db")
        .then((response) => {
          let data = response.data.messages,
            messages = [],
            messagesMain = [];

          //filter
          for (let i = 0; i < data.length; i++) {
            if (data[i].main) {
              messagesMain.push(data[i]);
            } else {
              messages.push(data[i]);
            }
          }

          this.$store.dispatch("setMessageMain", messagesMain);
          this.$store.dispatch("setMessage", messages);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
