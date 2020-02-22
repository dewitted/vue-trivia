<template>
  <div id="app">
    <OpeningWindow
      :currentQuestion="questions[index]"
      :next="next"
      v-on:try-again="reshuffleArray()"
    />
  </div>
</template>

<script>
import OpeningWindow from "./components/OpeningWindow.vue";
import _ from "lodash";

export default {
  name: "App",
  components: {
    OpeningWindow
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
    },
    reshuffleArray() {
      this.index = 0;
      this.questions = _.shuffle(this.questions);
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
