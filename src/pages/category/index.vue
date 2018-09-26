<template>
  <div class='container'>
    <categoryPanel v-on:onchang="changeCurrentCategory" :title="xxxx1" :categories="categories"></categoryPanel>
  </div>
</template>

<script>
import categoryPanel from '@/components/categoryPanel.vue'
import { initCategoryList } from '@/constants/category';


export default {
  data() {
    return {
     categories: initCategoryList,
     xxxx1: 'xxxx1',
    };
  },

  components: {
    categoryPanel,
  },

  methods: {
    changeCurrentCategory(tag) {
      console.log('s',tag);
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
