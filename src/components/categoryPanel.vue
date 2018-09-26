<template>
  <div class="category-panel">
    <div class="header">{{title}}</div>
    <div class="category-list">
      <div 
        class="category-item"
        @click="changeCategory(item,index)" 
        v-for="(item,index) in categories"
        :key="item.tag"
      >
        <div :class="item.disabled ? 'disabled' : ''">{{item.categoryName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {  // 必须提供字段
      required: true
    },
    categories: {   // 可选字段，有默认值
      default: []
    }
  },
  mounted () {
    this.$emit('change');
  },
  methods: {
    changeCategory(item,index) {
      if(!item.disabled) {
        console.log('====================================');
        console.log(this);
        console.log('====================================');
        this.$emit('xxchange',index);
      }
    }
  }
};
</script>

<style lang='less'>
.category-panel {
  margin-bottom: 20rpx;
}
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
    width: 25%;
    margin-bottom: 16rpx;
    div {
      margin: 0 18rpx;
      animation: zoomIn .5s ease;
      font-size: 24rpx;
      border: 2rpx solid #ccc;
      text-align: center;
      line-height: 50rpx;
    }
    .disabled {
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
