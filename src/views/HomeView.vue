<template>
  <div
    class="flex flex-col min-h-screen font-Roboto bg-gradient-to-b from-wth-primary to-wth-secondary"
  >
    <SiteNavigation />
    <MainView />
    <router-view />
  </div>
</template>

<script>
import SiteNavigation from "@/components/SiteNavigation.vue";
import MainView from "@/components/MainView.vue";
export default {
  name: "HomeView",
  components: {
    SiteNavigation,
    MainView,
  },
};
</script>
