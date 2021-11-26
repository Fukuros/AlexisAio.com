<template>
<footer
    class="
      w-full
      py-5
      bg-gradient-to-r
      from-purple-800
      to-indigo-600
      text-white
    "
  >
    <div
      class="
        container
        px-5
        mx-auto
        opacity-80
        flex
        gap-4
        flex-wrap
        items-center
      "
    >
      <ul class="text-xs">
        <li>Alexis AIO brought to you by <span class="bg-indigo-500 rounded-lg p-1">Alexis</span> | Website by <span class="bg-indigo-500 rounded-lg p-1">Viridian</span></li>
      </ul>

      <ul class="ml-auto text-2xl">
        <li class="hover:scale-105 transition">
          <a
            href="https://discord.gg/uZ29pxMFTz"
            target="_blank"
            rel="noopener noreferrer"
            ><font-awesome-icon :icon="['fab', 'discord']"> </font-awesome-icon
          ></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
    name: "Footer",

    components: {
        FontAwesomeIcon,
    },
    
    setup() {}
})
</script>