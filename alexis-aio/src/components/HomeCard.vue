<template>
  <div
    class="
      p-3
      rounded-xl
      overflow-hidden
      bg-gradient-to-r
      from-purple-800
      to-indigo-600
      shadow-lg
      hover:scale-105 duration-500
      transition
      card
      flex flex-col
      items-center
    "
  >
    <div class="flex flex-col gap-4 items-center mb-3">
      <font-awesome-icon :icon="cardIcon" class="text-4xl text-white mt-2">
      </font-awesome-icon>
      <p class="font-black tracking-wider mt-3 text-white">{{ cardTitle }}</p>
      <p class="mt-5 w-3/4 text-white font-thin">
        {{ cardText }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  name: "HomeCard",

  props: {
    cardIcon: String,
    cardTitle: String,
    cardText: String,
  },

  components: {
    FontAwesomeIcon,
  },
});
</script>
