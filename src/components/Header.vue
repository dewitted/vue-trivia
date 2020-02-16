<template>
  <div class="main-header-container">
    <div class="counters-style" id="answer-counter">
      <div id="question-icon"></div>
      <h1>4/10</h1>
    </div>
    <div class="counters-style" id="score">
      <div id="present-icon"></div>
      <h1>$150</h1>
    </div>
    <div class="counters-style" id="points">
      <div id="zap-icon"></div>
      <h1>4,281</h1>
    </div>
  </div>
</template>


<style lang="scss">
.main-header-container {
  width: 100%;
  height: 40px;
  position: absolute;
  top: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;
  .counters-style {
    border-radius: 40px;
    margin: 0;
    width: 22%;
    height: 60%;
  }
  #answer-counter {
    display: flex;
    justify-content: center;
    align-items: center;
    #question-icon {
      width: 30%;
      height: 60%;
      background-image: url("../assets/question-circle-regular.svg");
      background-position: center;
      background-repeat: no-repeat;
      margin-right: 5px;
    }
    h1 {
      margin: 0;
      font-size: 10px;
    }
  }
  #score {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff4e00;
    background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);
    #present-icon {
      width: 30%;
      height: 60%;
      background-image: url("../assets/gift-solid.svg");
      background-position: center;
      background-repeat: no-repeat;
      margin-right: 5px;
    }
    h1 {
      margin: 0;
      font-size: 10px;
      color: white;
    }
  }
  #points {
    display: flex;
    justify-content: center;
    align-items: center;
    #zap-icon {
      width: 30%;
      height: 60%;
      background-image: url("../assets/bolt-solid.svg");
      background-position: center;
      background-repeat: no-repeat;
      margin-right: 5px;
    }
    h1 {
      margin: 0;
      font-size: 10px;
      // color: white;
    }
  }
}
</style>