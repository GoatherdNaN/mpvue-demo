<template>
  <div class='container'>
    <category-panel @xxchang="changeCurrentCategory" :title="title1" :categories="categories"></category-panel>
    <category-panel @xxchang="changeOtherCategory" :title="title2" :categories="otherCategoies"></category-panel>
  </div>
</template>

<script>
import categoryPanel from '@/components/categoryPanel.vue'
import { initCategoryList, otherCategoryList } from '@/constants/category';


export default {
  data() {
    return {
     categories: initCategoryList,
     otherCategoies: otherCategoryList,
     title1: '点击删除以下频道',
     title2: '点击添加以下频道',
    };
  },

  components: {
    'category-panel': categoryPanel,
  },

  methods: {
    changeCurrentCategory(index) {
      console.log('d',index);
      const deleteItem = this.categories.splice(index,1);
      this.otherCategoies.push(deleteItem);
    },
    changeOtherCategory(index) {
      console.log('a',index);
      const addItem = this.otherCategoies.splice(index,1);
      console.log('/',addItem);
      this.categories.push(addItem);
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
