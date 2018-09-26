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
</div>
</template>

<script>
import { initCategoryList } from '@/constants/category';

export default {
  data() {
    return {
     categories: initCategoryList,
     scrollLeft: 0,
     nowIndex: 0,
    };
  },

  components: {
    // card,
  },

  methods: {
    changeTab(index,tag) {
      this.nowIndex = index;
      if (index > 4) {
        this.scrollLeft = (index - 4) * 120;
        console.log('s',index,this.scrollLeft);
      } else {
        this.scrollLeft = 0;
      }
    },
    toMore() {
      wx.navigateTo({
        url: "/pages/category/main",
      });
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
