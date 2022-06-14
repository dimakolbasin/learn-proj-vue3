<template>
  <div class="container">
    <form action="submit">
      <div>Тип блока</div>
      <select name="typeObj"
              class="item"
              v-model="selected">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
      <div>Значение</div>
      <textarea v-model="textValue"
                placeholder="Введите что-нибудь"></textarea>
      <button v-bind:class="{disabled: !isValid, active: isValid}"
              class="item btn"
              :disabled="!isValid"
              @click.prevent="submit">SEND
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AboutYourForm',
  data: () => {
    return {
      selected: 'title',
      textValue: ''
    }
  },
  computed: {
    isValid () {
      if (this.selected !== 'avatar') {
        return (this.textValue.length > 3 && this.textValue.length < 20)
      } else {
        return this.textValue.length > 3
      }
    }
  },
  emits: ['block-added'],
  methods: {
    submit () {
      this.$emit('block-added', {
        type: this.selected,
        value: this.textValue.trim(),
        id: Date.now()
      })

      this.selected = 'title'
      this.textValue = ''
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  margin-left: 8px;
  margin-top: 8px;
  background-color: white;
  display: inline-block;
  border-radius: 8px;
  min-height: 170px;
  word-break: break-all;

  form {
    padding: 8px;
    display: flex;
    flex-direction: column;
    max-width: 30vh;

    textarea {
      overflow-y: hidden;
      height: 50px;
      width: 90%;
      margin-left: 5px;
      word-wrap: break-word;
      word-break: break-all;
      white-space: normal;
    }

    .item {
      margin: 5px;
    }

    .btn {
      background-color: green;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      width: 70px;
    }

    .active {
      &:hover {
        transition: .3s;
        color: black;
        background-color: aquamarine;
      }
    }

    .disabled {
      background-color: gray;
    }
  }
}
</style>
