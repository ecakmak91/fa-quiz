<template>
  <div class="about">
    <ul>
      <QuestionItem 
        v-for="(item, index) in questionList" 
        :key="index" 
        :class="index==selectedPages?'active':''" 
        :question="item" 
        :index="index" 
        :totalLength="questionList.length"
        @nextPage="nextPage"
      ></QuestionItem>
    </ul>
  </div>
  <div class="optical-form">
    <div class="item" v-for="(item, index) in questionList" :key="index">
      <span class="question-number"> {{index+1}} </span>
      <div class="options">
        <a v-for="(option, i) in item.options" :key="i" :class="item.userAnswer==i ? 'selected':''">
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  import QuestionItem from "../components/QuestionItem.vue"
  import useQuestionJobs from "../composables/questionJobs.js"

  const {questionList} = useQuestionJobs()
  const selectedPages = ref(0)

  const nextPage=(index)=>{
    console.log(index)
    selectedPages.value=index
  }
  
  //const deneme=question.deneme.value

</script>
<style lang="scss" scoped>
  @import '@/assets/base.scss';
  ul{
    position: relative;
    padding-top: 3em;
    border-radius: 1em;
  }
  .optical-form{
    position: fixed;
    width: 50vw;
    bottom: 0;
    display: flex;
    left: 50%;
    justify-content: center;
    margin-left: -25vw;
    .item{

      border: 1px solid $ft-orange;
      .question-number{
        border-bottom: 1px solid #ccc;
        background-color: $ft-orange;
        padding: 0.5em;
        width: 1em;
        display: block;
        text-align: center;
      }
      .options{
        text-align: center;
        a{
          background-color: $ft-yellow;
          width: 1.5em;
          height: 1.2em;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: .5em auto;
          transition: .5s;
          &.selected{
            background-color: $ft-purple;
          }
        }
      }
    }
    
  }
</style>
