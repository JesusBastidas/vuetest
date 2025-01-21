import { defineStore } from 'pinia'

export const useSearchHistory = defineStore('searchHistory', {
    state: () => ({
      searchHistory: localStorage.getItem('searchHistory') ? JSON.parse(localStorage.getItem('searchHistory')!) : [] as string[],
    }),
    actions: {
      addSearchTerm(term: string) {
        const clearTerm = term.trim();
        if (clearTerm && !this.searchHistory.includes(clearTerm)) {
        this.searchHistory.unshift(clearTerm);
        if (this.searchHistory.length > 5) {
          this.searchHistory.pop();
        }
        localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
        }
      },
    },
  });