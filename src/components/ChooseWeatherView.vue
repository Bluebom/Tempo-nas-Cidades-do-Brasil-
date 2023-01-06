<template>
  <div class="h-96 max-h-full scroll overflow-scroll">
    <div
      @click="chooseOne(name)"
      v-for="{ id, name, country } in cities"
      :key="id"
      class="bg-wth-secondary mb-4 border border-wth-middle rounded text-white text-left px-4 py-3 hover:border-slate-300 hover:border-2 hover:text-slate-200 cursor-pointer"
      role="alert"
    >
      <p>
        <span class="text-amber">Cidade: </span>
        <strong class="text-amber-300"> {{ name }} </strong>
      </p>
      <p class="text-sm">
        <span class="text-amber">País: </span>
        {{ country }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseWeatherView",
  data() {
    return {};
  },
  methods: {
    chooseOne(name) {
      this.$emit("choice", name);
    },
  },
  props: {
    cities: {
      type: Array,
      default() {
        return [{}];
      },
    },
  },
  emits: ["choice"],
};
</script>

<style scoped></style>
