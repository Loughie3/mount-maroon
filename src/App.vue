<template>
  <NavBar />

  <router-view />
  <FooterSection />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterSection,
  },
};
</script>

<style>
#app {
  font-family: "Lato";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
