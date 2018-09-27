import Vue from 'vue';
import Vuex from 'vuex';
import { initCategoryList, otherCategoryList } from '@/constants/category';
import Api from '@/utils/api';
import { log } from 'util';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentCategories: initCategoryList,
    otherCategories: otherCategoryList,
    currentTag: '__all__',
    loading: false,
    hasMore: false,
    newsList: [],
  },
  actions: {
    async getNewsList({ commit,state }, params) {
      state.currentTag = params.tag || '__all__';
      state.loading = true;
      const res = await Api.getNewsList(params);
      state.loading = false;
      commit('saveNewsList',res.data);
      commit('saveHasMore',res.has_more);
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
    },
    saveHasMore: (state,hasMore) => {
      const obj = state;
      obj.hasMore = hasMore;
    },
  },
});

export default store;
