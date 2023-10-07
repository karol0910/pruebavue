import { defineStore } from 'pinia';
import { pinia } from '../Pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    PostsList: [],
    userDetails: null,
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,   
    
  }),
  actions: {
    async fetchUserList() {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        
  
        if (response.ok) {
          this.PostsList = data.data;
        }  },

    }
});
export const setupUserStore = () => {
    pinia.useStore(useUserStore);
  };