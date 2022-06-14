<template>
  <div class="resume-block">
    <AboutYourForm @block-added="addBlock"/>

    <SummaryComponent :blocks="blocks"/>
  </div>

  <CommentBlock/>

</template>

<script>
import AboutYourForm from '@/components/AboutYourForm'
import SummaryComponent from '@/components/SummaryComponent'
import CommentBlock from '@/components/CommentBlock'

export default {
  name: 'App',
  data: () => {
    return {
      blocks: []
    }
  },
  methods: {
    addBlock (block) {
      this.blocks.push(block)
    }
  },
  components: {
    AboutYourForm: AboutYourForm,
    SummaryComponent: SummaryComponent,
    CommentBlock: CommentBlock
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #2b3a4fc0;
  min-height: 100vh;

  .resume-block {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

  }
}
</style>
