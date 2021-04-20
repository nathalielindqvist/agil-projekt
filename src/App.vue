<template>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/pakorn">Pakorn</router-link> |
    <router-link to="/danny">Dan</router-link>

  </div>
  <div id="mainContainer">
    <!-- <router-link to="/Axel">Axel</router-link> -->
  </div>
  <div>
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/app/Navigation";
export default {
  components: {
    Navigation,
  },
};
</script>
<style scoped>

* {
  box-sizing: border-box;
}
#app {
  height: inherit;
}
#mainContainer {
  height: inherit;
}

:root{
    --primary-color: #2e5a7d;
    --secondary-black: #0d081a;
    --secondary-gray: #48464b;
    --body-bg: #e4dcdc;
}
</style>
