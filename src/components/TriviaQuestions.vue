<template>
  <div id="main-trivia-container">
    <Categories
      v-if="this.exit_check"
      v-on:music="$emit('music',1); exited()"
      v-on:games="$emit('games',2); exited()"
      v-on:film="$emit('film',3); exited()"
      v-on:books="$emit('books',4); exited()"
    />
    <Header
      v-if="!this.exit_check"
      :numCorrect="numCorrect"
      :numTotal="numTotal"
      :scoreTotal="scoreTotal"
      :freeCash="freeCash"
    />
    <div v-if="!this.exit_check" id="divider"></div>
    <div v-if="numTotal != 10 && !this.exit_check" id="timer"></div>
    <div v-if="numTotal != 10 && !this.exit_check" class="trivia-box">
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
            @click="selectAnswer(index); submitAnswer()"
            v-on:click="next"
          >{{answer}}</button>
        </form>
      </div>
    </div>
    <div v-if="numTotal === 10 && !this.exit_check" id="congratulations">
      <h1>Congratulations!</h1>
      <h2>You got {{numCorrect}} out of {{numTotal}} right, that's:</h2>
      <h3 v-if="numCorrect < 5">Absolutely horrible! :)</h3>
      <h3 v-else-if="numCorrect >= 5 && numCorrect < 10">Medioker, just like you! :)</h3>
      <h3 v-else>Actually quite scary, nerd! :)</h3>
      <div class="ending-buttons">
        <button id="try-again" @click="tryAgain()" v-on:click="$emit('try-again')">Try again?</button>
        <button id="exit" @click="exited()">Exit</button>
      </div>
    </div>
  </div>
</template>


<script>
import _ from "lodash";
import Header from "../components/Header.vue";
import Categories from "../components/Categories.vue";

export default {
  props: {
    question: Object,
    next: Function
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      numCorrect: 0,
      numTotal: 0,
      scoreTotal: 0,
      freeCash: 0,
      exit_check: true
    };
  },
  components: {
    Header,
    Categories
  },
  watch: {
    question: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.shuffleAnswers();
      }
    },
    numCorrect: {
      immediate: true,
      handler() {
        this.scoreCalc();
      }
    }
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
      console.log(index);
    },
    shuffleAnswers() {
      let answers = [
        ...this.question.incorrect_answers,
        this.question.correct_answer
      ];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.question.correct_answer
      );
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.increment(isCorrect);
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    },
    tryAgain() {
      this.numTotal = 0;
      this.numCorrect = 0;
    },
    scoreCalc() {
      this.scoreTotal = this.scoreTotal + this.numTotal * this.numCorrect;
    },
    exited() {
      this.exit_check = !this.exit_check;
      this.tryAgain();
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
  #main-trivia-container {
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
    #congratulations {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      padding-top: 20%;
      padding-left: 5%;
      padding-right: 5%;
      h1 {
        margin: 0;
        color: rgb(45, 218, 45);
        font-size: 1.5em;
      }
      h2 {
        margin: 0;
        font-size: 1.2em;
      }
      h3 {
        margin: 0;
        color: red;
        font-size: 1em;
      }
      .ending-buttons {
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        button {
          width: 90%;
          height: 30%;
          background-color: white;
          border-radius: 40px;
          border: 1px solid black;
          font-size: 0.75rem;
          font-weight: bold;
          margin-bottom: 5px;
        }
      }
    }
  }
</style>
