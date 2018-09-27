<template>
  <div class='container'>
    <category-panel @onchange="changeCurrentCategory" :title="title1" :categories="categories"></category-panel>
    <category-panel @onchange="changeOtherCategory" :title="title2" :categories="otherCategoies"></category-panel>
  </div>
</template>

<script>
import categoryPanel from '@/components/categoryPanel.vue'
import store from '../index/store.js'


export default {
  data() {
    return {
     title1: '点击删除以下频道',
     title2: '点击添加以下频道',
    };
  },
  computed: {
    categories() {
      return store.state.currentCategories;
    },
    otherCategoies() {
      return store.state.otherCategories;
    }
  },

  components: {
    'category-panel': categoryPanel,
  },

  methods: {
    changeCurrentCategory(index) {
      store.commit('removeCategory',index);
    },
    changeOtherCategory(index) {
      store.commit('addCategory',index);
    },
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
