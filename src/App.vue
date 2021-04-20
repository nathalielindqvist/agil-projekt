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
