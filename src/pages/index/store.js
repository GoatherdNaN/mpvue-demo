import Vue from 'vue';
import Vuex from 'vuex';
import { initCategoryList, otherCategoryList } from '@/constants/category';
import Api from '@/utils/api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentCategories: initCategoryList,
    otherCategories: otherCategoryList,
    newsList: [],
  },
  actions: {
    getNewsList({ commit }, params) {
      Api.getNewsList(params).then(newsList => {
        commit('saveNewsList',newsList.data);
      });
    }
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
    saveNewsList: (state,newsList) => {
      const obj = state;
      obj.newsList = newsList;
    }
  },
});

export default store;
