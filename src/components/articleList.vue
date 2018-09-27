<template>
  <div>
    <div 
      @click="toNewsDetail" 
      v-for="(item, index) in newNewsList"
      :key="index"
      class="news-item"
    >
      <template v-if="item.type === tempType.noImage">
        <text>{{item.title}}</text>
        <news-item-info :news="item"></news-item-info>
      </template >
      <template v-if="item.type === tempType.oneSmall">
        <div class="one-small desc">
          <text class="desc-title">{{item.title}}</text>
          <news-item-info :news="item"></news-item-info>
        </div>
        <div class="one-small img-info">
          <img :src="item.image_url" alt="没加载出来" />
        </div>
      </template>
      <template v-if="item.type === tempType.oneLarge">
        <div class="one-large">
          <text>{{item.title}}</text>
          <div class="img-info">
            <img :src="item.large_image_url" alt="没加载出来" />
          </div>
          <news-item-info :news="item"></news-item-info>
        </div>
      </template>
      <template v-if="item.type === tempType.moreImages">
        <div class="more-images">
          <text>{{item.title}}</text>
          <div class="img-info">
            <div 
              v-for="(v,i) in item.image_list"
              :key="i"
              class="img-box"
            >
              <img :src="v.url" alt="没加载出来" />
            </div>
          </div>
          <news-item-info :news="item"></news-item-info>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { tempType } from '@/constants/config.js';
import { judgeImageTemp } from '@/utils/index.js';
import newsItemInfo from '@/components/newsItemInfo.vue';

export default {
  data() {
    return {
      tempType: tempType,
    }
  },
  props: ['newsList'],
  computed: {
    newNewsList() {
      return this.newsList.map(v=> {
        v.type = judgeImageTemp(v);
        return v;
      })
    }
  },
  methods: {
    toNewsDetail() {
      console.log('跳转详情！');
    },
  },
  components: {
    'news-item-info': newsItemInfo,
  },
};
</script>

<style lang='less'>
.news-item {
  padding: 24rpx 0;
  border-bottom: 1px solid rgba(221, 221, 221, 0.6);

  .one-small {
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    &.desc {
      width: 70%;
      .desc-title {
        display: block;
        margin-right: 20rpx;
      }
    }
    &.img-info {
      width: 30%;
      height: 100rpx;
      background: url(//s3b.pstatp.com/growth/mobile_list/image/toutiaoicon_loading_textpage@3x_f7c130ce.png) #efefef no-repeat center center;
      background-size: 50%;
    }
  }
  .one-large {
    width: 100%;
    .img-info {
      margin-top: 10rpx;
      background: url(data:image/gif;base64,R0lGODlh7AA5AIAAAOHh4f///yH5BAEAAAEALAAAAADsADkAAAL/j…KeOsLC45S5cWljXJBWuGaWugxmqZdsEuqGipxJ6qmZM/5paqCdohFbrMAgGWuttt6Ka2wFAAA7) #efefef no-repeat center center;
      width: 100%;
      height: 400rpx;
    }
  }
  .more-images {
    width: 100%;
    .img-info {
      margin-top: 10rpx;
      width: 100%;
      .img-box {
        box-sizing: border-box;
        display: inline-block;
        width: 33.3%;
        height: 140rpx;
        &:not(:last-of-type) {
          padding-right: 6rpx;
        }
      }
    }
  }
}
</style>
