//import { ref,computed } from 'vue'
//import { useStore } from 'pinia'

import { useQuestionStore } from '../stores/question'


export default function useQuestionJobs() {
  // Filtrelenmiş ürün listesi
  const {questionList, setAnswer} = useQuestionStore()
  

  return {
    questionList,
    setAnswer
  }
}
