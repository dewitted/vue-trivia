<template>
  <div class="main-trivia-container">
    <Header />
    <div id="divider"></div>
    <div id="timer"></div>
    <div class="trivia-box">
      <div id="topic">
        <h1>{{question.category}}</h1>
      </div>
      <div id="question">
        <h1>{{question.question}}</h1>
      </div>
      <div class="button-container">
        <form v-on:submit.prevent>
          <button
            id="answer-button"
            :key="index"
            v-for="(answer, index) in answers"
            @click="selectAnswer(index)"
            v-on:click="next"
          >{{answer}}</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import Header from "../components/Header.vue";

export default {
  props: {
    question: Object,
    next: Function
  },
  data() {
    return {
      selectedIndex: null
    };
  },
  components: {
    Header
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
      console.log(index);
    }
  },
  computed: {
    answers() {
      let answers = [...this.question.incorrect_answers];
      answers.push(this.question.correct_answer);
      return answers;
    }
  }
};
</script>

<style lang="scss">
  .main-trivia-container {
    font-family: "Open Sans", sans-serif;
    width: 80%;
    height: 80%;
    background-color: white;
    margin: 0;
    box-sizing: border-box;
    padding-top: 40px;
    top: 40px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    #divider {
      width: 100%;
      height: 2px;
      background-color: black;
      position: absolute;
      top: 40px;
      margin: 0;
    }
    #timer {
      width: 40px;
      height: 40px;
      background-color: black;
      border-radius: 50%;
      position: absolute;
      top: 70px;
    }
    .trivia-box {
      width: 90%;
      height: 65%;
      // background-color: red;
      position: absolute;
      top: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      #topic {
        font-size: 0.35rem;
        margin: 0;
        color: grey;
      }
      #question {
        font-size: 0.45rem;
        text-align: center;
        margin: 0;
      }
      .button-container {
        width: 100%;
        height: 70%;
        // background-color: grey;
        form {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          #answer-button {
            width: 90%;
            height: 20%;
            background-color: white;
            border-radius: 40px;
            border: 1px solid black;
            font-size: 0.75rem;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
