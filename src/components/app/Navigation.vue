<template>
  <div @mouseleave="setHover" id="navContainer">
    <i
      v-if="hover"
      id="navIconWithoutHover"
      class="fas fa-caret-square-down fa-2x"
    ></i>
    <i
      @mouseenter="setHover"
      v-else
      id="navIconWithoutHover"
      class="far fa-caret-square-down fa-2x"
    ></i>
    <div v-if="hover" id="navBarDropContainer">
      <ul id="navList">
        <li><router-link to="Axel">Axel</router-link></li>
        <li><router-link to="Nathalie">Nathalie</router-link></li>
        <li><router-link to="pakorn">Pakorn</router-link></li>
        <li><router-link to="danny">Danny</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: true,
    };
  },
  methods: {
    setHover() {
      this.hover = !this.hover;
    },
  },
};
</script>

<style scoped>
#navContainer {
  display: flex;
  position: absolute;
  z-index: 1;
}

#navIconWithoutHover {
  color: orangered;
  cursor: pointer;
}
#navIconWithoutHover:hover {
  color: orangered;
  cursor: pointer;
}

#navList {
  display: flex;
}

#navBarDropContainer {
  width: 100%;
}

li {
  margin-left: 20px;
  color: orangered;
  list-style: none;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}

li:hover {
  text-decoration: underline;
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}
</style>
