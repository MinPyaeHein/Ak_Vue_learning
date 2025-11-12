import { defineStore } from 'pinia'
import * as actions from './actions'
export const useStudentStore = defineStore('students', {
  state: () => ({
    dataList: [],
  }),
  actions: {...actions},
  persist: true,
})