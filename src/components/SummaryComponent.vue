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
    <h3 v-else>{{ $i18n('app.title') }}</h3>
  </div>
  <button class="item btn"
          @click.prevent="changeLang">LANGUAGE
  </button>
</template>

<script>
import ResumeAvatar from './parts/ResumeAvatar'
import ResumeSubtitle from './parts/ResumeSubtitle'
import ResumeText from './parts/ResumeText'
import ResumeTitle from './parts/ResumeTitle'

export default {
  inject: ['langChange'],
  props: ['blocks'],
  methods: {
    changeLang () {
      this.langChange('en')
      this.$forceUpdate()
    }
  },
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
  word-break: break-all;
}
</style>
