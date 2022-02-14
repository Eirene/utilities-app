<!--Main page-->
<template>
  <div class="main-page min-h-screen flex flex-col bg-cover bg-left-bottom md:bg-center bg-no-repeat">
    <header class="py-4 px-6 lg:py-8 lg:px-12 md:flex md:items-center md:justify-between">
      <div class="uppercase text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">CUBBIES</div>

      <ul class="inline-flex items-center">
        <li class="md:ml-6">
          <span class="w-8 h-8 rounded-full bg-sky-50 text-center inline-flex justify-center items-center">
            <img class="h-4" src="../assets/logo_twitter.png" alt="">
          </span>
        </li>
        <li class="ml-6">
          <span class="w-8 h-8 rounded-full bg-sky-50 text-center inline-flex justify-center items-center">
            <img class="h-6 rounded-full" src="../assets/logo_discord.png" alt="">
          </span>
        </li>
        <li class="ml-6">
          <img class="h-8" src="../assets/logo_opensea.svg" alt="">
        </li>
        <li class="ml-8">
          <button type="button" class="tailwind-btn-primary">
            Minting Soon
          </button>
        </li>
      </ul>
    </header>
    <main>
      <section class="text-gray-600 body-font p-4">
        <div class="container mx-auto flex md:px-5 md:py-24 md:flex-row flex-col md:items-center">
          <div class="md:w-1/2 2xl:w-1/2 bg-white bg-opacity-75 p-4 rounded-2xl">
            <h1 class="text-2xl lg:text-6xl 2xl:text-7xl tracking-tight mb-4 font-semibold text-gray-900">
              <span class="block">Cubbies.</span>
              For all kind.
            </h1>
            <p class="mb-8 text-base xl:text-xl 2xl:text-2xl text-gray-800 md:leading-relaxed pr-16 md:pr-0">
              Cubbies for all kind. 7777 Cubbies roaming the metaverse, looking for a home.
              Cubbie's are your ticket to our Cubhouse, where you'll find fellow artists/creatives,
              with incentivised collaboration and limitless creative possibilities.
            </p>
            <div class="flex">
              <a href="/" class="tailwind-btn-primary uppercase">Roadmap</a>
              <a href="/"  class="tailwind-btn-secondary uppercase ml-2">Our Team</a>
<!--              <a href="/"  class="tailwind-btn-info uppercase ml-2">FAQ's</a>-->
            </div>
          </div>
        </div>
      </section>
    </main>

    <p class="bubble thought md:hidden">
      <a href="">FAQ's</a>
    </p>
  </div>
</template>


