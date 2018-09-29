<template>
<div class="container">
  <div class="header">
    <scroll-view scroll-x="true" :scroll-left="scrollLeft" class="category-bar">
      <div 
        @click="changeTab(index,item.tag)" 
        v-for="(item, index) in categories"
        :class="[nowIndex==index ?'active':'']" 
        :key="item.tag"
      >
        {{item.categoryName}}
      </div>
    </scroll-view>
    <span @click="toMore" class="iconfont icon-jia"></span>
  </div>
  <div class="news-list">
    <article-list :newsList="newsList"></article-list>
  </div>
  <div class="refresh" @click="refresh">
    <span class="iconfont icon-shuaxin" :class="refreshClass"></span>
  </div>
</div>
</template>

<script>
import store from './store';
import articleList from '@/components/articleList.vue';

export default {
  data() {
    return {
     scrollLeft: 0,
     nowIndex: 0,
    };
  },
  onReachBottom() {
    if (!this.hasMore) {
      return false;
    }
    this.getNewsList({},false);
  },

  mounted() {
    this.getNewsList();
  },

  computed: {
    categories() {
      return store.state.currentCategories;
    },
    newsList() {
      return store.state.newsList;
    },
    refreshClass() {
      return store.state.loading ? 'on' : 'off';
    },
    currentTag() {
      return store.state.currentTag;
    },
    hasMore() {
      return store.state.hasMore;
    },
  },

  methods: {
    getNewsList(params={}, isFirst=true) {
      params.tag = params.tag || this.currentTag;
      if(!isFirst) {
        const now = new Date().getTime();
      }
      store.dispatch('getNewsList',{isFirst,params});
    },
    changeTab(index,tag) {
      this.nowIndex = index;
      if (index > 4) {
        this.scrollLeft = (index - 4) * 120;
      } else {
        this.scrollLeft = 0;
      }
      this.getNewsList({
        tag,
      })
    },
    toMore() {
      wx.navigateTo({
        url: "/pages/category/main",
      });
    },
    refresh() {
      this.getNewsList();
    },
  },
  
  components: {
    'article-list': articleList,
  }
};
</script>

<style lang='less' scoped>
  @import "./style";

</style>
