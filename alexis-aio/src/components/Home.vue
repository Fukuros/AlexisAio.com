<template>
  <VideoModal @close="toggleModal" :modalActive="modalActive"> </VideoModal>
  <header
    class="
      w-full
      h-screen
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
    <div class="container mx-auto text-white h-full z-20 relative">
      <div class="flex h-full items-center justify-center">
        <div class="grid gap-4 relative -top-10 justify-center items-center">
          <div class="flex flex-row items-center justify-center">
            <h1 class="text-4xl lg:text-7xl font-black tracking-wide">
              Alexis
            </h1>
            <h3
              class="
                text-3xl
                ml-3
                font-semibold
                px-2
                py-1
                bg-indigo-500
                rounded-md
                shadow-lg
              "
            >
              AIO
            </h3>
          </div>
          <div class="overflow-hidden justify-center flex w-full h-40 relative">
            <transition name="slide">
              <span class="text-2xl lg:text-3xl absolute" :key="tagline">
                {{ tagline }}
              </span>
            </transition>
          </div>
          <a
            href="https://discord.gg/uZ29pxMFTz"
            target="_blank"
            rel="noopener noreferrer"
            class="
              items-center
              gap-3
              bg-indigo-400
              flex flex-row
              hover:bg-indigo-300 hover:scale-105
              duration-300
              transition
              shadow-md
              p-2
              py-3
              rounded-md
              justify-center
              items-center
              w-auto
              font-extrabold
            "
          >
            <font-awesome-icon
              :icon="['fab', 'discord']"
              class="text-white text-3xl"
            >
            </font-awesome-icon>
            Join Discord
          </a>
          <router-link
            to="/champions"
            class="
              bg-turqoise-app
              p-2
              py-3
              rounded-md
              font-extrabold
              items-center
              flex flex-row
              justify-center
              gap-3
              hover:bg-turqoise-light hover:scale-105
              duration-300
              transition
            "
          >
            <font-awesome-icon icon="eye" class="text-xl"> </font-awesome-icon>
            View {{ championCount }} Champions
          </router-link>
        </div>
      </div>
      <p
        class="
          text-white
          absolute
          bottom-12
          left-1/2
          transform
          -translate-x-1/2
          text-xs
          font-thin
          tracking-widest
          opacity-50
        "
      >
        Find out more...
      </p>
      <font-awesome-icon
        icon="hand-point-down"
        class="
          absolute
          bottom-5
          left-1/2
          transform
          -translate-x-1/2
          text-2xl
          opacity-50
        "
      >
      </font-awesome-icon>
    </div>
  </header>
  <main class="mx-auto relative py-6 grid gap-16">
    <section class="container mx-auto">
      <div class="flex flex-row items-center justify-center mb-5 gap-3">
        <h2
          class="
            text-4xl
            font-extrabold
            text-transparent
            bg-clip-text bg-gradient-to-r
            from-purple-800
            to-indigo-600
          "
        >
          What Alexis
        </h2>
        <h4
          class="
            text-2xl
            bg-indigo-500
            font-semibold
            text-white
            py-1
            px-2
            rounded-md
            shadow-lg
          "
        >
          AIO
        </h4>
        <p
          class="
            text-4xl
            font-extrabold
            text-transparent
            bg-clip-text bg-gradient-to-r
            from-purple-800
            to-indigo-600
          "
        >
          offers
        </p>
      </div>
      <ul class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-5">
        <li>
          <HomeCard
            cardIcon="cogs"
            cardTitle="Performance"
            cardText="With Alexis AIO, FPS drops are a thing of the past. Efficient calculations ensure that your game keeps running at the speed you want to see."
          >
          </HomeCard>
        </li>
        <li>
          <HomeCard
            cardIcon="tools"
            cardTitle="Configuration"
            cardText="Alexis AIO provides a large range of settings so that each user can configure their settings as is needed. Feel like changing something? Easy!"
          >
          </HomeCard>
        </li>
        <li>
          <HomeCard
            cardIcon="code"
            cardTitle="Code Maintenance"
            cardText="Alexis AIO will never be outdated - by listening to our users and through their own initiative, Alexis AIO will always be kept up-to-date for users."
          >
          </HomeCard>
        </li>
      </ul>
      <h3
        class="
          text-4xl text-center
          font-extrabold
          text-transparent
          bg-clip-text bg-gradient-to-r
          from-purple-800
          to-indigo-600
          mt-5
        "
      >
        Interested?
      </h3>
      <div class="flex px-5 items-center justify-center mt-5 gap-3">
        <a
          class="
            bg-gradient-to-r
            from-purple-800
            to-indigo-600
            text-white
            px-6
            py-4
            rounded-md
            hover:scale-105
            transition
            shadow-lg
          "
          target="_blank"
          href="https://jkshop.gg/store/category/33-alexis-aio/"
        >
          <font-awesome-icon icon="dollar-sign"> </font-awesome-icon>
          Purchase Alexis
          <span class="text-sm bg-indigo-500 p-0.5 rounded-sm shadow-lg"
            >AIO</span
          >
        </a>
        <p>or</p>
        <button
          class="
            bg-turqoise-app
            px-6
            py-4
            text-white
            rounded-md
            hover:scale-105
            transition
            shadow-lg
          "
          @click="toggleModal"
        >
          <font-awesome-icon icon="video" class="text-white">
          </font-awesome-icon>
          Watch Preview
        </button>
      </div>
    </section>
  </main>
  <Footer>
  </Footer>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted, Ref, ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import champions from "../json/champions.json";
import HomeCard from "./HomeCard.vue";
import Footer from "./Footer.vue";
import VideoModal from "./VideoModal.vue";

export default defineComponent({
  name: "Home",

  components: {
    FontAwesomeIcon,
    HomeCard,
    VideoModal,
    Footer,
  },

  setup() {
    const currentTaglineIndex = ref(0);
    const taglines = ["Fast.", "Functional.", "Fun."];
    const tagline = computed(() => taglines[currentTaglineIndex.value]);

    const modalActive = ref(false);
    const championCount = Object.keys(champions).length;

    const interval = setInterval(() => {
      currentTaglineIndex.value === taglines.length - 1
        ? (currentTaglineIndex.value = 0)
        : currentTaglineIndex.value++;
    }, 2500);

    onUnmounted(() => clearInterval(interval));

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    return {
      tagline,
      modalActive,
      championCount,
      toggleModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 0.4s;
  position: absolute;
}
.slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
