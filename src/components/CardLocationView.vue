<template>
  <div
    v-if="choose"
    class="m-auto p-10 drop-shadow-lg bg-wth-secondary rounded-lg overflow-hidden shadow-lg md:w-1/2 sm:w-1"
  >
    <div class="px-10 pt-4 pb-2">
      <h2 class="font-bold text-xl mb-2">{{ choose.name }}</h2>
    </div>
    <hr class="text-white pb-2 mb-2" />
    <div class="px-6">
      <h2 class="text-lg font-bold text-md">{{ choose.main.temp }}ºC</h2>
    </div>
    <div class="px-6 pb-2">
      <p class="font-bold text-md flex gap-1 justify-center items-center">
        Nublado
        <img
          class="w-16 drop-shadow-lg"
          :src="url"
          alt="icone do openweather"
        />
      </p>
    </div>
    <div class="px-6 pb-2 flex justify-center">
      <p
        class="font-bold text-md flex gap-3 px-3 border-white justify-center items-center"
      >
        <i class="fa-solid fa-droplet"></i> {{ choose.main.humidity }}%
      </p>
      <p
        class="font-bold text-md flex gap-3 px-3 border-l-2 justify-center items-center"
      >
        <i class="fa-solid fa-wind"></i>
        <span class="text-sm">{{ choose.wind.speed }} km/h</span>
      </p>
    </div>
  </div>

  <div
    v-if="!choose"
    class="m-auto p-10 drop-shadow-lg bg-wth-secondary rounded-lg overflow-hidden shadow-lg md:w-1/2 sm:w-1"
  >
    <h1>Carregando...</h1>
  </div>
</template>

<script>
export default {
  name: "CardLocationVue",
  computed: {
    url() {
      return `https://openweathermap.org/img/wn/${this.choose.weather[0].icon}@2x.png`;
    },
  },
  props: {
    choose: {
      type: Object,
      default() {
        return null;
      },
    },
  },
};
</script>

<style scoped></style>
