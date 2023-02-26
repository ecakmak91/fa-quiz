<template>
  <li :class="index==0?'active':''">
    <h3>Question {{ index+1 }} of {{ length }} </h3>
    <div class="question-text">{{question.question}}</div>
    <div class="options">
      <a v-for="(option, i) in question.options" :key="i" @click="clickOpt(index,i)" :class="selectedOpt===i ? 'selectedOpt':''">
        {{ option }}
      </a>
    </div>
  </li>
</template>
<script setup>
  import { ref } from "vue";
  import useQuestionJobs from "../composables/questionJobs.js"
  defineProps({
    question:Object,
    index:Number,
    length:Number
  })
  const emit = defineEmits(['nextPage'])

  const {setAnswer} = useQuestionJobs()
  const selectedOpt=ref(null)

  const clickOpt = (index,userOption)=>{
    selectedOpt.value=userOption
    setAnswer(index,userOption)
    emit("nextPage",index+1);
  }


</script>
<style lang="scss" scoped>
@import '@/assets/base.scss';
li{
  list-style: none;
  position: absolute;
  border-radius: 1em;
  background: #fff;
  overflow: hidden;
  box-shadow: 0px 0px 8px -5px #ccc;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.active{
    z-index: 2;
  }
  h3{
    background: $ft-pink;
    color: #fff;
    width: 300px;
    text-align: center;
    height: 50px;
    border-radius: 0 0 30px 30px;
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .question-text{
    background-color: $ft-orange;
    color: #fff;
    width: 100%;
    text-align: center;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
  }
  .options{
    display: flex;
    justify-content: space-between;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    padding: 2em;
    box-sizing: border-box;
    a{
      width: 33%;
      padding: 1em 0em;
      box-sizing: border-box;
      box-shadow: 0 0 5px 0px #ccc;
      margin: 1em;
      border-radius: 2em;
      transition: .3s;
      text-align: center;
      cursor: pointer;
      &:hover{
        color: #fff;
        background: $ft-blue;
      }
      &.selectedOpt{
        background: $ft-purple;
        color: #fff;
      }
    }
  }
}
</style>
