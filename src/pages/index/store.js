import Vue from 'vue';
import Vuex from 'vuex';
import { initCategoryList, otherCategoryList } from '@/constants/category';
import Api from '@/utils/api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentCategories: initCategoryList,
    otherCategories: otherCategoryList,
    currentTag: '__all__',
    min_behot_time: 0,
    firstLoading: false,
    loading: false,
    moreLoading: false,
    hasMore: true,
    newsList: [],
  },
  actions: {
    async getNewsList({ commit,state }, payload) {
      const {isFirst, params} = payload;
      const isSameTag = state.currentTag === params.tag;
      if(isFirst) {
        state.firstLoading = true;
        state.hasMore = true;
      } else if(state.hasMore) {
        state.moreLoading = true;
      }
      if(!isSameTag) {
        state.currentTag = params.tag;
        state.min_behot_time = 0;
      }
      state.loading = true;
      params.i = params.min_behot_time = state.min_behot_time;
      const res = await Api.getNewsList(params);
      if(Array.isArray(res.data) && res.data.length) {
         state.min_behot_time = res.data[res.data.length - 1].behot_time;
      }
      state.firstLoading = false;
      state.loading = false;
      state.moreLoading = false;
      if(isFirst) {
        commit('refreshNewsList',res.data);
        commit('saveHasMore',true);
      } else {
        commit('saveNewsList',res.data);
        commit('saveHasMore',res.has_more);
      }
    },
    async getNewsDetail({ commit, state }, params) {
      const res = await Api.getNewsDetail(params);
      console.log('res',res);
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
      obj.newsList = [...obj.newsList,...newsList];
    },
    refreshNewsList: (state,newsList) => {
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
