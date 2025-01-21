import { defineStore } from 'pinia'


export const useSpinerSearch = defineStore('spinerSearch', {
  state: () => ({
    spiner: false,
  }),
  actions: {
    //control del spinner
    setSpinerTrue() {
      this.spiner = true
    },
    setSpinerFalse() {
      this.spiner = false
    },
  },
});