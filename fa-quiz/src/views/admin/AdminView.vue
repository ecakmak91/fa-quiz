<template>
  <form>
    <div class="item">
      <div class="lbl">Question</div>
      <input type="text" v-model="quizObj.question">
    </div>
    <div class="item half" :class="quizObj.correctAnswer==0 ? 'active':''">
      <div class="lbl">Option 1</div>
      <input type="text" v-model="quizObj.options[0]">
      <a @click="chooseOption(0)">Is True</a>
    </div>
    <div class="item half" :class="quizObj.correctAnswer==1 ? 'active':''">
      <div class="lbl">Option 2</div>
      <input type="text" v-model="quizObj.options[1]">
      <a @click="chooseOption(1)">Is True</a>
    </div>
    <div class="item half" :class="quizObj.correctAnswer==2 ? 'active':''">
      <div class="lbl">Option 3</div>
      <input type="text" v-model="quizObj.options[2]">
      <a @click="chooseOption(2)">Is True</a>
    </div>
    <div class="item half" :class="quizObj.correctAnswer==3 ? 'active':''">
      <div class="lbl">Option 4</div>
      <input type="text" v-model="quizObj.options[3]">
      <a @click="chooseOption(3)">Is True</a>
    </div>
    <div class="item">
      <a @click="addQustion">Add Question</a>
    </div>
  </form>
</template>

<script setup>
  
  import {ref} from "vue"
  import useQuestionJobs from "../../composables/questionJobs"
  const {pushQuestion} = useQuestionJobs()
  
  // class question {
  //   constructor(height, width) {
  //     this.height = height;
  //     this.width = width;
  //   }
  // }

  const quizObj=ref({
    question: "",
    options: [""],
    correctAnswer: null,
    userAnswer:null
  })
  const chooseOption=(opt)=>{
    quizObj.value.correctAnswer=opt
  }
  const addQustion=()=>{
    pushQuestion(quizObj.value)
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/base.scss';
  form{
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item{
      margin-bottom: 2em;
      border-bottom: 1px solid #d0d0d0;
      width: 100%;
      box-sizing: border-box;
      &.half{
        padding: 1em;
        width: 49%;
      }
      &.active{
        background-color: $ft-blue;
      }
      .lbl{
        margin-bottom: .5em;
        text-align: left;
      }
      input{
        width: 100%;
        padding: 0.5em 0;
        text-align: center;
        border: none;
        box-shadow: 0px 0px 8px 0px #ccc;
      }
      a{
        display: block;
        margin-top: 1em;
      }
    }
  }
</style>