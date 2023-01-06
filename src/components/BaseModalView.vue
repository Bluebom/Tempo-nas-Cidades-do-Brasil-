<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="modalVisibility"
        class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
      >
        <Transition name="modal-inner">
          <div
            v-if="modalVisibility"
            class="p-4 rounded-lg bg-white self-start mt-32 max-w-screen-md text-left"
          >
            <slot name="modal" />
            <button
              @click="closeModal"
              class="text-white rounded-lg ml-auto flex mt-8 bg-wth-primary py-2 px-6"
            >
              Fechar
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: "BaseModalVue",
  props: {
    modalVisibility: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["closeModal"],
  methods: {
    closeModal() {
      this.$emit("closeModal", 1);
    },
  },
};
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
