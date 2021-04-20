<template>
  <i v-on:click="goToTop" class="fas fa-arrow-up fa-3x"></i>
</template>

<script>
export default {
  methods: {
    goToTop() {
      const newElement = document.getElementById("scrollButton");
      newElement.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
i {
  position: fixed;
  color: orangered;
}
i:hover {
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 5px;
}

i:active {
  color: white;
}
</style>
