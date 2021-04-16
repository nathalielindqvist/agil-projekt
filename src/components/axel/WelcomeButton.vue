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
      console.log(newElement[1]);
      newElement[1].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
#welcomeButton {
  background-color: rgb(66, 91, 128, 0.7);
  padding: 20px;
  border-radius: 10px;
  width: fit-content;
}

#welcomeButton:hover {
  cursor: pointer;
}

#welcomeButton:active {
  font-size: 28px;
}
</style>
