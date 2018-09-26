<template>
  <div class="category-panel">
    <div class="header">{{title}}</div>
    <div class="category-list">
      <div 
        class="category-item"
        :class="[item.tag === '__all__' ?'disabled':'']" 
        @click="changeCategory(item.tag)" 
        v-for="item in categories"
        :key="item.tag"
      >
        {{item.categoryName}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title','categories'],
  methods: {
    changeCategory(tag) {
      _this.$emit('onchange',tag);
    }
  }
};
</script>

<style lang='less'>
.header {
  width: 100%;
  padding: 0 20rpx;
  line-height: 50rpx;
  background-color: #f5f5f5;
  font-size: 30rpx;
  color: #666;
}
.category-item {
    display: inline-block;
    width: 20%;
    margin: 18rpx;
    animation: zoomIn .3s ease;
    font-size: 24rpx;
    border: 2rpx solid #ccc;
    text-align: center;
    line-height: 50rpx;
    &,.disabled {
      background-color: #f0f0f0;
    }
  }
@keyframes zoomIn{
	0% {
    opacity: 0;
    transform: scale3d(.3,.3,.3);
  }
	50% {
    opacity: 1;
  }
}
</style>
