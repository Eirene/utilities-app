<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="text-gray-600 bg-blue-50 body-font">
    <div class="container mx-auto flex flex-wrap p-5 items-center justify-between">
      <a class="inline-flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <span class="ml-3 text-xl">Utilities App</span>
      </a>

      <div class="inline-flex md:order-3">
        <a href="https://isorokina.com/" target="_blank">
          <img
              class="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/1826433?v=4"
              alt="Irina Sorokina UI/UX Web Developer" />
        </a>
      </div>

      <div class="flex mt-1">
        <router-link
          v-for="(link, index) in links"
          :key="link.name"
          :to="link.href"
          class="text-gray-900 font-medium hover:text-indigo-400"
          :class="{ 'mr-8': index + 1 !== links.length }"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
const links = [
  { name: "Components", href: "/", current: false },
  { name: "Notify", href: "/notify", current: false },
  { name: "Trello", href: "/trello", current: false },
  { name: "Pages", href: "/pages", current: false },
];

export default {
  name: "Nav",
  components: {},

  setup() {
    return {
      links,
    };
  },
};
</script>
