<template>
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
      <button class="text-base ml-auto bg-indigo-500 p-1 rounded-md shadow-lg hover:bg-indigo-300 transition"><router-link to="/">Home</router-link></button>
    </div>
  </header>
  <main class="relative p-6 grid gap-8">
      <div>
          <h3 class="text-xl font-extrabold text-indigo-600">
              Supported Champions
          </h3>
      </div>
      <ChampionCards/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChampionCards from "./ChampionCards.vue";

export default defineComponent({
  name: "Champions",

  components: {
      ChampionCards,
  },

  setup() {},
});
</script>
