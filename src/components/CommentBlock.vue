<template>
  <div class="container">
    <div class="comments" v-if="comments.length > 0"></div>
    <button class="btn" v-else>Загрузить комментарии</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      comments: []
    }
  }

}
</script>

<style scoped lang="scss">
.container {
  margin-top: 8px;

  .comments {
    margin-left: 8px;
    margin-top: 8px;
    background-color: white;
    display: inline-block;
    border-radius: 8px;
    width: 500px;
    height: 400px;
  }

  .btn {
    background-color: green;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    width: 120px;

    &:hover {
      transition: .3s;
      color: black;
      background-color: aquamarine;
    }
  }
}
</style>
