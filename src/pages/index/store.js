import Vue from 'vue';
import Vuex from 'vuex';
import { initCategoryList, otherCategoryList } from '@/constants/category';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentCategories: initCategoryList,
    otherCategories: otherCategoryList,
  },
  mutations: {
    removeCategory: (state,index) => {
      const obj = state;
      const deleteItem = obj.currentCategories.splice(index,1);
      obj.otherCategories = [...obj.otherCategories,...deleteItem];
    },
    addCategory: (state,index) => {
      const obj = state;
      const addItem = obj.otherCategories.splice(index,1);
      obj.currentCategories = [...obj.currentCategories,...addItem];
    },
  },
});

export default store;
