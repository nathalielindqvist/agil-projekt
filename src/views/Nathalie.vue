<template>
  <div class="container">
      <div class="content">
          <h1 class="grid-item-header">Profile</h1>
          <div class="grid-item-container">
              <a id="grid-item-image1" href="#">
                <img src="../assets/Nathalie.jpg" alt="Profile picture Nathalie" height="300">
              </a>
          <p class="grid-item-profile">Hi there! My name is Nathalie Lindqvist, a 26 year old woman who has a passion for that little extra. May it be a song performed by a favourite band such as Kent or Avenged Sevenfold, an exquisite scoop of chocolate ice cream or an extra hour spent on making a freshly coded web site look just right. Frontend development is something that will never be "just a job" for me. When there's so much to do and learn it's impossible to be bored!</p>
          </div>
          <hr>

          <h1 class="grid-item-header">Expertise</h1>
          <div class="grid-item-container">
            <a id="grid-item-image2" href="#">
              <img src="../assets/expertise.png" alt="Simple HTML tag symbole" height="300">
            </a>
          <div class="grid-item-expertise">
            <p>Through studies I have acquired theoretical and/or practical knowledge in:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node</li>
                <li>MySQL</li>
                <li>Vue</li>
                <li>React</li>
                <li>Web security</li>
            </ul>
          </div>
          </div>
          <hr>


          <h1 class="grid-item-header">Portfolio</h1>
          <div class="grid-item-container">
          <a id="grid-item-image3" href="http://mobelbiblioteket.se/" target="_blank">
            <img src="../assets/chair.jpg" alt="Arm chair" height="300">
          </a>
          <section class="grid-item-portfolio1">
            <h3>Möbelbiblioteket (real project)</h3>
            <p>During spring and summer 2019 I had the honor to work as a junior frontend developer on the project Möbelbiblioteket, a service where users can borrow furniture from one another. You can check it out by <a class="text-link" href="http://mobelbiblioteket.se/" target="_blank">clicking here!</a></p>
          </section>
            <a id="grid-item-image4" href="https://doktor.se/" target="_blank">
              <img src="../assets/doctor.jpg" alt="Child playing doctor" height="300">
              </a>
          <section class="grid-item-portfolio2">
              <h3>Doktor.se (fictional project)</h3>
              <p>As part of a project group in 2018 i got to take part in shaping the app Doktor.se, an app where patients can get help from healthcare staff through video calls, ask for advice or renew existing prescriptions. <a class="text-link" href="https://doktor.se/" target="_blank">Click here</a> to go to their web page.</p>
          </section>
          </div>


      </div>

  </div>
</template>

<script>

export default {

}
</script>

<style scoped>

/*>>>>>>>>>>>>>>> Background color <<<<<<<<<<<<<<<*/
.container {
    background-image: linear-gradient(to bottom right, #40edaa, #31af7f);
}


/*>>>>>>>>>>>>>>> General background layout <<<<<<<<<<<<<<<*/
.content {
    width: 60%;
    margin: auto;
    padding: 20px 20px 100px 20px;
    background-color: rgba(255, 255, 255, 0.7);
    clip-path: polygon(0 0%, 100% 4%, 100% 96%, 0% 100%);
}


/*>>>>>>>>>>>>>>> Grid layout <<<<<<<<<<<<<<<*/
.grid-item-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 20%);
    gap: 10px;
    margin: 20px;
}


/*>>>>>>>>>>>>>>> Images: grid placement, styling & animation <<<<<<<<<<<<<<<*/
#grid-item-image1 {
    grid-column: 5/6;
    grid-row: 1/2;
    filter: opacity(90%);
    transition: transform 0.5s;
    clip-path: polygon(0 0%, 100% 0%, 100% 94%, 0% 100%);
    height: 300px;
}

#grid-item-image2 {
    grid-column: 1/2;
    grid-row: 1/2;
    transition: transform 0.5s;
    height: 300px;
}

#grid-item-image3 {
    grid-column: 1/2;
    grid-row: 1/3;
    filter: opacity(90%);
    transition: transform 0.5s;
    clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0% 94%);
    height: 300px;
}

#grid-item-image4 {
    grid-column: 5/6;
    grid-row: 4/6;
    filter: opacity(90%);
    transition: transform 0.5s;
    clip-path: polygon(0 0%, 100% 5%, 100% 100%, 0% 100%);
    height: 300px;
}


/*>>>>>>>>>>>>>>> Hover animation images <<<<<<<<<<<<<<<*/
#grid-item-image1:hover,
#grid-item-image2:hover,
#grid-item-image3:hover,
#grid-item-image4:hover {
    transform: scale(1.1, 1.1);
    filter: opacity(80%);
}


/*>>>>>>>>>>>>>>> Grid placement text <<<<<<<<<<<<<<<*/
.grid-item-profile {
    grid-column: 1/4;
    grid-row: 1/3;
}

.grid-item-expertise {
    grid-column: 3/5;
    grid-row: 1/2;
}

.grid-item-portfolio1 {
    grid-column: 3/6;
    grid-row: 1/3;
}

.grid-item-portfolio2 {
    grid-column: 1/4;
    grid-row: 4/6;
}


/*>>>>>>>>>>>>>>> Link styling <<<<<<<<<<<<<<<*/
.text-link:hover {
    text-decoration: underline;
    color: #31af7f;
}


/*>>>>>>>>>>>>>>> Header styling <<<<<<<<<<<<<<<*/
.grid-item-header {
    margin: 1em 0;
}


/*>>>>>>>>>>>>>>> UL styling <<<<<<<<<<<<<<<*/
ul {
    max-width: 120px;
    margin: auto;
    list-style-type: square;
}


/*>>>>>>>>>>>>>>> Text alignment<<<<<<<<<<<<<<<*/
* {
    text-align: center;
}

</style>
