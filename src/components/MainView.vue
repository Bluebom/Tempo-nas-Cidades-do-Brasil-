<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        type="text"
        name=""
        id=""
        v-model="searchQuery"
        @change="doSearchQuery"
        placeholder="Pesquisa por sua cidade aqui"
        class="py-2 text-white placeholder:text-wth-secondary px-1 w-full bg-transparent border-b focus:border-wth-secondary focus:outline-none focus:shadow-[0px_1px_0_0#004E71]"
      />
    </div>
    <ChooseWeatherView
      v-if="!callApi"
      @choice="weatherDeatail"
      :cities="selected"
    />
    <CardLocationView v-if="callApi" :choose="choose" />
  </main>
</template>

<script>
import cities from "../data/cities.json";
import { mapState } from "vuex";
import ChooseWeatherView from "@/components/ChooseWeatherView.vue";
import axios from "axios";
import CardLocationView from "@/components/CardLocationView.vue";
export default {
  name: "MainView",
  components: {
    CardLocationView,
    ChooseWeatherView,
  },
  data() {
    return {
      searchQuery: "",
      selected: [],
      callApi: false,
      choose: null,
    };
  },
  computed: {
    ...mapState({
      $_apiKey: (state) => state.openWeather.api_key,
    }),
  },
  methods: {
    doSearchQuery() {
      this.callApi = false;
      this.choose = null;
      if (this.searchQuery) {
        this.selected = cities.filter(
          (cty) =>
            cty.name.match(
              new RegExp(`([A-Za-z]+|)${this.searchQuery}(|[A-Za-z]+)`, "ig")
            )?.length > 0
        );
        return;
      }
      this.selected = [];
    },
    async weatherDeatail(name) {
      this.callApi = true;
      const weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${this.$_apiKey}&lang=pt_br&units=metric`
      );
      this.choose = weather.data;
    },
  },
};
</script>

<style scoped></style>
