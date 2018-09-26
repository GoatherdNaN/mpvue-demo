const allCategory = [
  {
    tag: '__all__',
    categoryName: '推荐',
    disabled: true
  },
  {
    tag: 'news_society',
    categoryName: '社会',
  },
  {
    tag: 'news_entertainment',
    categoryName: '娱乐',
  },
  {
    tag: 'news_tech',
    categoryName: '科技',
  },
  {
    tag: 'news_car',
    categoryName: '汽车',
    targetUrl: 'm.dcdapp.com',
  },
  {
    tag: 'news_sports',
    categoryName: '体育',
  },
  {
    tag: 'news_finance',
    categoryName: '财经',
  },
  {
    tag: 'news_military',
    categoryName: '军事',
  },
  {
    tag: 'news_world',
    categoryName: '国际',
  },
  {
    tag: 'news_fashion',
    categoryName: '时尚',
  },
  {
    tag: 'news_game',
    categoryName: '游戏',
  },
  {
    tag: 'news_hot',
    categoryName: '热点',
  },
  {
    tag: 'news_travel',
    categoryName: '旅游',
  },
  {
    tag: 'news_history',
    categoryName: '历史',
  },
  {
    tag: 'news_discovery',
    categoryName: '探索',
  },
  {
    tag: 'news_food',
    categoryName: '美食',
  },
  {
    tag: 'news_baby',
    categoryName: '育儿',
  },
  {
    tag: 'news_regimen',
    categoryName: '养生',
  },
  {
    tag: 'news_story',
    categoryName: '故事',
  },
  {
    tag: 'news_essay',
    categoryName: '美文',
  }
];

const splitCount = 10;

const initCategoryList = allCategory.slice(0,10);
const otherCategoryList = allCategory.slice(10);

export { initCategoryList, otherCategoryList };
