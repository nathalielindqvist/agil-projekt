<template>
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
</style>
