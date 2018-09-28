<template>
  <div class="info">
    <text v-if="news.hot" class="tag news-info">热</text>
    <text v-if="news.is_stick" class="tag news-info">置顶</text>
    <text v-if="isAd" class="blue tag news-info">广告</text>
    <text class="news-info">{{news.media_name}}</text>
    <text class="news-info">评论 {{news.comment_count}}</text>
    <text class="news-info">{{getDateDiff}}</text>
  </div>
</template>

<script>
import { getDateDiff } from '@/utils/index.js';

export default {
  props: {
    news: {
      required: true,
      type: Object,
      default: {}
    },
  },
  computed: {
    getDateDiff() {
      if(this.news.publish_time) {
        return getDateDiff(this.news.publish_time);
      }
      return '';
    },
    isAd() {
      return !!this.news.article_type && this.news.label === '广告';
    }
  }
};
</script>

<style lang='less'>
.info {
  margin-top: 6rpx;
}
.news-info {
  font-size: 20rpx;
  display: inline-block;
  margin-right: 15rpx;
  line-height: 24rpx;
  color: #999;
  &.tag {
    color: rgba(248, 89, 89, 0.5);
    border: 2rpx solid rgba(248, 89, 89, 0.5);
    border-radius: 6rpx;
    padding: 0 4rpx;
    &.blue {
      color: rgba(42, 144, 215, 0.5);
      border-color: rgba(42, 144, 215, 0.5);
    }
  }
}
</style>
