<template>
  <h1 style="color: white" v-on:click="scrollPageTo()" id="welcomeButton">
    Welcome <i style="color: white" class="fas fa-level-down-alt"></i>
  </h1>
</template>
<script>
export default {
  methods: {
    scrollPageTo() {
      const newElement = document.getElementsByClassName("axelViewContainer");
      newElement[1].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
#welcomeButton {
  padding: 20px;
  border-radius: 10px;
  width: fit-content;
  font-size: 30px;
}

#welcomeButton:hover {
  cursor: pointer;
  font-size: 30px;
}

#welcomeButton:active {
  font-size: 30px;
}
</style>
