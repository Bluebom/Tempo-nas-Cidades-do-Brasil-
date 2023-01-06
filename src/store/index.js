import { createStore } from "vuex";

export default createStore({
  strict: true,
  modules: {
    openWeather: {
      state: {
        api_key: "{{API KEY}}",
      },
    },
  },
});
