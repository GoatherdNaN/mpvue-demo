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
  <div class="news-list">这是添加新闻列表的地方，在组件里封装</div>
  <div class="refresh" @click="refresh">
    <span class="iconfont icon-shuaxin" :class="refreshClass"></span>
  </div>
</div>
</template>

<script>
import store from './store';

export default {
  data() {
    return {
     scrollLeft: 0,
     nowIndex: 0,
     refreshClass: 'off',
    };
  },
  computed: {
    categories() {
      return store.state.currentCategories;
    },
  },

  components: {
    // card,
  },

  methods: {
    changeTab(index,tag) {
      this.nowIndex = index;
      if (index > 4) {
        this.scrollLeft = (index - 4) * 120;
      } else {
        this.scrollLeft = 0;
      }
    },
    toMore() {
      wx.navigateTo({
        url: "/pages/category/main",
      });
    },
    refresh() {
      this.refreshClass = this.refreshClass === 'on' ? 'off' : 'on';
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo();
  },
};
</script>

<style lang='less' scoped>
  @import "./style";

</style>
