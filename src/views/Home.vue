<template>
  <div class="home">
    <div class="container">
      <h1>This is us</h1>
      <div class="content">
        <img id="img1" src="../assets/landingpage1.jpg" alt="Working by a laptop" height="400">
        <h2>Web Developers</h2>
        <img id="img2" src="../assets/landingpage2.jpg" alt="Man working by desk" height="400">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur placeat vitae obcaecati, autem, corrupti ipsa, pariatur fugit distinctio blanditiis totam earum fugiat magnam animi rem aperiam enim veniam harum!</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style scoped>

.container {
  margin-bottom: 10em;
}

.content {
  display: grid;
  grid-template-columns: repeat(9, 11%);
  grid-template-rows: repeat(5, 20%);
}

#img1 {
  grid-column: 1/4;
  grid-row: 1/3;
  filter: opacity(70%);
  z-index: 1;
}

#img2 {
  grid-column: 5/8;
  grid-row: 4/6;
  filter: opacity(70%);
  z-index: 1;
}

h1 {
  text-align: center;
  font-size: 50px;
  margin-bottom: 1em;
  padding-top: 1em;
}

h2 {
  grid-column: 4/7;
  grid-row: 2/3;
  z-index: 10;
  font-size: 40px;
  max-height: 50px;
  text-align: center;
  background-color: rgba(255, 69, 0, 0.7);
}

p {
  grid-column: 4/6;
  grid-row: 5/6;
  z-index: 10;
  text-align: center;
  height: 200px;
  background-color: rgba(255, 69, 0, 0.7);
}

</style>
