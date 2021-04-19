<template>
  <div id="profileTopContainer"> 
      <main>
        <h1>Danny</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste rem consequuntur dicta expedita ratione maxime. Earum nihil eveniet ea corrupti officia nisi nulla aliquid ullam cum, soluta veniam temporibus.</p>
      </main>
      <aside>
          <img src="../assets/profilepic_danny.jpg" alt="Profile picture of Danny">
      </aside>
  </div>
  <div id="profileExpContainer">
    <main>
        <img src="../assets/exppic_danny.jpg" alt="">
    </main>
    
    <h1>Expertise</h1>
     
  </div>
  <div id="profilePortContainer">
      <h1>Portfolio</h1>
      <main>
          <div class="portPicWrapper"><img src="../assets/portpic_danny_1.jpg" alt=""></div>
          <h3>Static Bakery Website</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste rem consequuntur dicta expedita ratione maxime. Earum nihil eveniet ea corrupti officia nisi nulla aliquid ullam cum, soluta veniam temporibus.</p>
      </main>
      <main>
          <div class="portPicWrapper"><img src="../assets/portpic_danny_3.jpg" alt=""></div>
          <h3>API Weather App</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste rem consequuntur dicta expedita ratione maxime. Earum nihil eveniet ea corrupti officia nisi nulla aliquid ullam cum, soluta veniam temporibus.</p>
      </main>
      <main>
          <div class="portPicWrapper"><img src="../assets/portpic_danny_2.jpg" alt=""></div>
          <h3>Shopping App made with Vue</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste rem consequuntur dicta expedita ratione maxime. Earum nihil eveniet ea corrupti officia nisi nulla aliquid ullam cum, soluta veniam temporibus.</p>
      </main>
  </div>
</template>

<script>
export default {
name: "ProfileDanny"
}
</script>

<style scoped>
#profileTopContainer, #profileExpContainer, #profilePortContainer {
    width: 75%;
    margin: 3% 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    border-top: 2px solid black;
    padding: 5% 2%;
}

#profileExpContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

#profileExpContainer main {
    width: 50%;

}


#profilePortContainer main {
     width: 20%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
}


.portPicWrapper {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.portPicWrapper img {
    margin: auto 0;
}


main {
    width: 50%;
}

aside {
    width: 30%;
}

img {
    width: 100%;
}
</style>