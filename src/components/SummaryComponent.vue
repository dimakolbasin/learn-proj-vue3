<template>
  <div class="container">
    <template v-if="blocks.length">
      <component
        v-for="block in blocks"
        :key="block.id"
        :is="'resume-' + block.type"
        v-bind="{value: block.value}"
      ></component>
    </template>
    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import ResumeAvatar from './parts/ResumeAvatar'
import ResumeSubtitle from './parts/ResumeSubtitle'
import ResumeText from './parts/ResumeText'
import ResumeTitle from './parts/ResumeTitle'

export default {
  props: ['blocks'],
  components: {
    ResumeTitle,
    ResumeText,
    ResumeSubtitle,
    ResumeAvatar
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
  width: 300px;
  min-height: 170px;
}
</style>
