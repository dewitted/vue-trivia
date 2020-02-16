<template>
  <div class="main-container">
    <TriviaQuestions v-if="started" :question="currentQuestion" :next="next" />
    <!-- {{ currentQuestion.question }} -->
    <button class="opening-buttons" id="start" @click="startedSwitch()">START PLAYING</button>
    <button class="opening-buttons" id="howTo">How to play?</button>
  </div>
</template>


<script>
import TriviaQuestions from "../components/TriviaQuestions.vue";

export default {
  props: {
    currentQuestion: Object,
    next: Function
  },
  components: {
    TriviaQuestions
  },
  data() {
    return {
      started: false
    };
  },
  methods: {
    startedSwitch() {
      this.started = !this.started;
    }
  }
};
</script>

<style lang="scss">
  .main-container {
    margin: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/background-gif.gif");
    background-position: center;
    // background-color: grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    padding-bottom: 25px;
    .opening-buttons {
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
      background-image: url("../assets/button-background.gif");
      background-position: center;
      color: white;
      font-weight: bold;
      font-size: 15px;
    }
    #howTo {
      font-size: 0.5rem;
      height: 25px;
      background-color: black;
      background-color: rgba(0, 0, 0, 0.1);
      color: white;
      // font-weight: bold;
    }
  }
</style>
