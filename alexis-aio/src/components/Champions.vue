<template>
  <div class="flex flex-col min-h-screen">
    <header
    class="
      w-full
      bg-gradient-to-r
      from-purple-800
      to-indigo-600
      relative
      overflow-hidden
      z-0
    "
  >
  <div
      class="
        w-full
        h-screen
        bgp-floatingCogs-[indigo.300,.100]
        z-10
        absolute
        bg-fixed
      "
    ></div>
    <div class="flex flex-row gap-1 py-5 px-5 text-white text-2xl items-center z-20 relative">
      <p>Alexis</p>
      <p class="text-sm bg-indigo-500 p-0.5 rounded-md shadow-lg">AIO</p>
      <button class="text-base text-indigo-600 ml-auto bg-background-app hover:bg-gray-300 p-1 rounded-md shadow-lg transition"><router-link to="/">Home</router-link></button>
    </div>
  </header>
  <main class="relative p-6 grid gap-8 fixed pb-24">
      <div class="flex flex-col justify-center">
          <h3 class="text-xl font-extrabold text-indigo-600">
              Supported Champions | {{ championCount }} champions
          </h3>
      </div>
      <ChampionCards/>
  </main>
  <Footer class="fixed bottom-0">
  </Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChampionCards from "./ChampionCards.vue";
import champions from "../json/champions.json";
import Footer from "./Footer.vue";

export default defineComponent({
  name: "Champions",

  components: {
      ChampionCards,
      Footer,
  },

  setup() {
    const championCount = Object.keys(champions).length;

    return {
      championCount,
    }
  },
});
</script>
