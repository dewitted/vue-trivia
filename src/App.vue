<template>
  <div id="app">
    <OpeningWindow />
    <!-- <Header />
    <TriviaQuestions />-->
  </div>
</template>

<script>
// import Header from "./components/Header.vue";
// import TriviaQuestions from "./components/TriviaQuestions.vue";
import OpeningWindow from "./components/OpeningWindow.vue";

export default {
  name: "App",
  components: {
    // Header,
    // TriviaQuestions,
    OpeningWindow
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
