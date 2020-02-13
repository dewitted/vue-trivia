<template>
  <div class="main-container">
    <!-- <TriviaQuestions /> -->
    <button id="start">START PLAYING</button>
    <button id="howTo">How to play?</button>
  </div>
</template>


<script>
// import TriviaQuestions from "../components/TriviaQuestions.vue";

export default {
  name: "App",
  components: {
    // TriviaQuestions
  }
};
</script>

<style lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  background-image: url("../assets/background-pixel.jpg");
  background-position: center;
  // background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-bottom: 25px;
  button {
    font-family: "Open Sans", sans-serif;
    font-size: 0.8rem;
    width: 90px;
    height: 40px;
    margin: 0;
    border: 1px solid white;
    border-radius: 40px;
  }
  #start {
    margin-bottom: 25px;
    width: 170px;
    background-color: white;
    border: 0px;
  }
  #howTo {
    font-size: 0.5rem;
    height: 25px;
    background-color: black;
    background-color: rgba(0, 0, 0, 0.1);
    color: white;
  }
}
</style>
