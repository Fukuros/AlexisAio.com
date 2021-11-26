<template>
  <TransitionRoot appear :show="modalActive" as="template">
    <Dialog as="div">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center flex flex-row justify-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-in-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in-out"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black bg-opacity-50">
            </DialogOverlay>
          </TransitionChild>
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="
                flex-1
                max-w-full
                p-6
                my-8
                overflow-hidden
                text-left
                items-center
                justify-center
                align-middle
                transition-all
                transform
                bg-background-app
                shadow-xl
                rounded-2xl
              "
            >
              <DialogTitle
                as="h3"
                class="
                  text-lg
                  font-medium
                  leading-6
                  text-indigo-600
                  flex flex-row
                  items-center
                "
              >
                Watch Preview
                <font-awesome-icon
                  icon="times"
                  class="ml-auto text-gray-600 hover:text-red-500 transition"
                  @click="close"
                ></font-awesome-icon>
              </DialogTitle>
              <div class="mt-5 h-full flex flex-col items-center">
                <iframe
                  src="https://www.youtube.com/embed/5YtxyFkK4I0?autoplay=1&mute=1"
                  class="rounded-lg w-full h-full mt-5 mb-10"
                ></iframe>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

export default defineComponent({
  name: "VideoModal",

  props: ["modalActive"],

  components: {
    FontAwesomeIcon,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
    TransitionRoot,
    TransitionChild,
  },

  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    return {
      close,
    };
  },
});
</script>
