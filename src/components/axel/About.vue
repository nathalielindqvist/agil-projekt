<template>
  <div id="aboutComponent">
    <p>
      Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit..." "There is no one who loves pain
      itself, who seeks after it and wants to have it, simply because it is
      pain..." Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vestibulum convallis est eget orci malesuada, sit amet tempus magna
      faucibus. Vestibulum mattis odio at lectus semper blandit. Proin in erat
      at libero feugiat ultrices. Pellentesque consequat urna dapibus nulla
      eleifend sagittis. Proin eget mi nisi. Praesent at dui non quam egestas
      sagittis auctor sed nisl. Vivamus consequat purus odio. Nulla facilisi.
      Fusce orci ante, mollis eget accumsan sit amet, tristique sed ligula.
      Etiam mi lorem, commodo ac neque et, auctor lacinia enim. Nunc non mauris
      interdum, lacinia felis et, bibendum lectus. Donec semper ex arcu, a
      sollicitudin mauris feugiat bibendum. Nullam sed fringilla sem. Nullam non
      mi sit amet orci sodales tincidunt a id ligula. Quisque at mollis velit.
      Vestibulum eu urna bibendum, blandit arcu sit amet, euismod sapien. Morbi
      nec augue aliquet, vehicula eros et, interdum eros. Etiam metus quam,
      maximus gravida mauris vel, fermentum consectetur nulla. Quisque eget
      nulla ligula. Cras vitae turpis tincidunt, aliquam ex at, condimentum
      nisi.
      <i
        v-on:click="goNextDown"
        id="arrowDown"
        class="fas fa-arrow-down fa-3x"
      ></i>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    goNextDown() {
      const newElement = document.getElementById("containerThree");
      newElement.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style scoped>
div {
  width: 50%;
  z-index: 1;
  position: absolute;
}

p {
  background-color: rgb(0, 0, 0, 0.2);
  border: 1px solid black;
  border-radius: 7px;
  padding: 20px;
  color: white;
  font-size: 18px;
}
#particles {
  position: absolute;
  left: 0;
  top: 100vh;
}

#arrowDown {
  color: white;
}
#arrowDown:hover {
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 5px;
}

#arrowDown:active {
  color: orangered;
}
</style>
