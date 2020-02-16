<template>
  <div id="app">
    <OpeningWindow :currentQuestion="questions[index]" :next="next" />
  </div>
</template>

<script>
import OpeningWindow from "./components/OpeningWindow.vue";

export default {
  name: "App",
  components: {
    OpeningWindow
    // TriviaQuestions
  },
  data() {
    return {
      questions: [],
      answers: [],
      index: 0
    };
  },
  mounted: function() {
    fetch("https://opentdb.com/api.php?amount=50&category=12&type=multiple", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.questions = jsonData.results;
        console.log(this.questions);
      });
  },
  methods: {
    next: function() {
      this.index++;
    }
  }
};
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
  #app {
    font-family: "Open Sans", sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
  }
  body {
    margin: 0;
    width: 100%;
    height: 568px;
  }
</style>
