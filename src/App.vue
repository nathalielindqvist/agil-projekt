<template>
  <div>
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/app/Footer";

import Navigation from "./components/app/Navigation";
export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  height: inherit;
}
#mainContainer {
  height: inherit;
}
</style>
