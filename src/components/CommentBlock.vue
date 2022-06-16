<template>
  <div class="container" v-if="comments.length > 0">
    <div class="comments-wrapper" v-for="item in comments" v-bind:key="item">
        <div class="name-autor">
          {{ item.author }}
        </div>
        <div class="body-comment">
          {{ item.text }}
        </div>
        <div class="data-comment">
          {{ item.time }}
        </div>
    </div>
  </div>
  <button class="btn" @click="loadComments()" v-else>Загрузить комментарии</button>
</template>

<script>
import axios from 'axios'
export default {
  data: () => {
    return {
      comments: []
    }
  },
  methods: {
    async loadComments () {
      const resp = await axios.get('http://localhost:3000/comments/')
      this.comments = resp.data
    }

  }
}
</script>

<style scoped lang="scss">
.container {
  margin: 8px;
  width: 95%;

  .comments-wrapper {
    padding: 4px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    margin-top: 8px;
  }

  .name-autor {

  }

}

.btn {
  margin-top: 8px;
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
</style>
