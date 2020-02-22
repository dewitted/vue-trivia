<template>
  <div class="categories-container">
    <h1>Pick a category</h1>
    <button @click="$emit('music', 1)">Music</button>
    <button @click="$emit('games', 2)">Video Games</button>
    <button @click="$emit('film', 3)">Film</button>
    <button @click="$emit('books', 4)">Books</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .categories-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    button {
      width: 90%;
      height: 10%;
      background-color: white;
      border-radius: 40px;
      border: 1px solid black;
      font-size: 0.75rem;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
</style>