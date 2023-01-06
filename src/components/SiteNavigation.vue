<template>
  <header class="sticky top-0 bg-wth-primary shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center text-white gap-3">
          <i
            class="fa-solid fa-sun md:text-2xl sm:text-xl text-sm-xl text-amber-400"
          ></i>
          <p class="md:text-2xl sm:text-lg">Tempo nas Cidades do Brasil</p>
        </div>
      </RouterLink>
      <div class="flex gap-3 flex-1 justify-end">
        <i
          @click="openAndCloseModal"
          class="fa-solid fa-circle-info text-xl hover:text-wth-secondary cursor-pointer duration-150"
        ></i>
      </div>
      <BaseModalVue
        @closeModal="openAndCloseModal"
        :modalVisibility="modalVisibility"
      >
        <template #modal>
          <div class="text-black">
            <h1 class="text-2xl mb-1">Sobre:</h1>
            <p class="mb-4">
              Digite a cidade a qual você deseja saber inforções sobre o tempo.
            </p>
            <h2 class="text-2xl">Como funciona</h2>
            <ol class="list-decimal list-inside mb-4">
              <li>Pesquise por sua cidade através da barra de pesquisa.</li>
              <li>
                Selecione a cidade dentre a listagem que irá aparecer após sua
                pesquisa.
              </li>
            </ol>
          </div>
        </template>
      </BaseModalVue>
    </nav>
  </header>
</template>

<script>
import BaseModalVue from "@/components/BaseModalView.vue";

export default {
  name: "SiteNavigation",
  data() {
    return {
      modalVisibility: null,
    };
  },
  components: { BaseModalVue },
  methods: {
    openAndCloseModal() {
      this.modalVisibility = !this.modalVisibility;
    },
  },
};
</script>
