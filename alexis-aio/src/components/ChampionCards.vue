<template>
  <div class="relative flex flex-row items-center">
    <input
      type="search"
      v-model="search"
      placeholder="Search champions..."
      class="p-2 pl-8 border border-indigo-600 border-3 rounded-md focus:outline-none"
    />
    <font-awesome-icon
      icon="search"
      class="absolute left-2 text-indigo-600 text-lg"
    >
    </font-awesome-icon>
    <p class="ml-auto text-indigo-600 font-extrabold">{{ championCount }} champions</p>
  </div>
  <ul class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-5">
    <li
      v-for="champion in filterChampions"
      class="rounded-lg h-48 hover:scale-105 transition shadow-lg"
    >
      <div
        :style="{ 'background-image': champion.bg }"
        class="bg-cover rounded-lg bg-origin-border w-full h-full relative"
      >
        <p class="text-white text-2xl absolute bottom-1 left-2">
          {{ champion.name }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import champions from "../json/champions.json";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  name: "ChampionCards",

  components: {
    FontAwesomeIcon,
  },

  setup() {
    let search = ref("");

    const championCount = Object.keys(champions).length;

    const filterChampions = computed(() => {
      return Object.values(champions).filter((champion) => {
        return champion.name.toLowerCase().includes(search.value.toLowerCase());
      });
    });

    return {
      filterChampions,
      championCount,
      search,
    };
  },
});
</script>
