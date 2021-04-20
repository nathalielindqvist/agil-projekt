<template>
  <div id="axelMainContainer">
    <div id="scrollButton">
      <ScrollToTopButton />
    </div>
    <div class="axelViewContainer" id="containerOne">
      <div id="videoContainer">
        <BackgroundVideo
          @mouseover="hover = true"
          @mouseleave="hover = false"
        />
      </div>
      <div
        id="welcomeButtonPositioner"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <h1 v-if="!hover" id="nameHeader">I'm Axel Jönsson</h1>
        <WelcomeButton v-if="hover" />
      </div>
    </div>
    <div class="axelViewContainer" id="containerTwo">
      <ParticlesBg type="cobweb" id="particles" />

      <About />
    </div>
    <div class="axelViewContainer" id="containerThree">
      <Contact id="contactText" />
    </div>
  </div>
</template>

<script>
import BackgroundVideo from "../components/axel/BackgroundVideo";
import WelcomeButton from "../components/axel/WelcomeButton";
import About from "../components/axel/About";
import ScrollToTopButton from "../components/axel/ScrollToTopButton";
import Contact from "../components/axel/Contact";
import { ParticlesBg } from "particles-bg-vue";

export default {
  components: {
    BackgroundVideo,
    WelcomeButton,
    About,
    ParticlesBg,
    ScrollToTopButton,
    Contact,
  },

  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style>
:root {
  --h1: 40px;
}

body {
  background-color: rgb(10, 12, 41);
  margin: 0;
  width: 100%;
  font-family: "Open Sans", sans-serif;
}
body::-webkit-scrollbar {
  display: none;
}
#scrollButton {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 10px;
  position: sticky;
}

.axelViewContainer {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
#videoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

#welcomeButtonPositioner {
  background-color: rgb(66, 91, 128, 0.7);
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  align-items: center;
}
#welcomeButtonPositioner:hover {
  border: 1px solid black;
}

#nameHeader {
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-size: var(--h1);
}

#containerTwo {
  background-color: rgb(0, 38, 26);
}
#containerThree {
  background-color: rgb(30, 91, 128);
}

#contactText:hover {
  background-color: orangered;
}
</style>
