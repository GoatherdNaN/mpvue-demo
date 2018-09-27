import { tempType } from '@/constants/config';
/**
 * 判断使用哪种模板 
 * 通过articleType, hasImage, imageList, imageUrl,largeMode等字段判断
 * tempType:
 * 1. 'noImage':无图   2. 'oneSmall': 一张小图    3. 'oneLarge': 一张大图    4. 'moreImages': 多图，一般就要3张
 */
export function judgeImageTemp(article) {
  if(!article.has_image) {
    return tempType.noImage;
  }
  if(!article.image_list.length) {
    if(!!article.large_mode) {
      return tempType.oneLarge;
    }
    return tempType.oneSmall;
  }
  return tempType.moreImages;
};
/**
 * 把时间戳转换成几天前这样的字符串
 * @param {Number} dateTimeStamp 时间戳
 */
export function getDateDiff(dateTimeStamp) {
	let minute = 60;
	let hour = minute * 60;
	let day = hour * 24;
	let month = day * 30;
	let year = month * 12;
	let now = new Date().getTime()/1000;
	let diffValue = now - dateTimeStamp;
	if(diffValue < 0) {
		return;
	}
	let yearC = diffValue / year;
	let monthC = diffValue / month;
	let weekC = diffValue / (7 * day);
	let dayC = diffValue / day;
	let hourC = diffValue / hour;
	let minC = diffValue / minute;
  let result = "";
	if(yearC >= 1) {
		result += parseInt(yearC) + "年前";
	} else if(monthC >= 1) {
		result += parseInt(monthC) + "月前";
	} else if(weekC >= 1) {
		result += parseInt(weekC) + "周前";
	} else if(dayC >= 1) {
		result += parseInt(dayC) + "天前";
	} else if(hourC >= 1) {
		result += parseInt(hourC) + "小时前";
	} else if(minC >= 1) {
		result += parseInt(minC) + "分钟前";
	} else
		result = "刚刚";
		return result;
};