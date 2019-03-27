/**
 * @desc 时间戳格式化
 * @param timestamp 时间戳
 * @param fmt 返回时间格式
 */
function format(timestamp, fmt = 'yyyy-MM-dd hh:mm:ss') {
    timestamp = parseInt(timestamp);

    if (!timestamp || typeof (timestamp) !== 'number') {
        console.warn('时间戳类型错误');
        return timestamp;
    }

    let millisecs = timestamp.toString().length == 10 ? (timestamp * 1000) : timestamp,
        time_obj = new Date(millisecs), //参数是 时间戳转换的毫秒
        o = {
            'M+': time_obj.getMonth() + 1, //月份
            'd+': time_obj.getDate(), //日
            'h+': time_obj.getHours(), //小时
            'm+': time_obj.getMinutes(), //分
            's+': time_obj.getSeconds(), //秒
            'q+': Math.floor((time_obj.getMonth() + 3) / 3), //季度
            'S': time_obj.getMilliseconds(), //毫秒
        };

    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (time_obj.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    return fmt;
}

/**
 * @desc 数组乱序
 * @param list 数组
 */
function shuffle(list) {
    return list.sort(function () {
        return Math.random() - 0.5;
    });
}

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait, type) {
    let previous = 0,
        timeout;

    return function () {
        let context = this;
        let args = arguments;
        if (type === 1) {
            let now = Date.now(); // 返回时间戳

            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        } else if (type === 2) {
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}

/**
 * @desc 扁平化多元数组
 * @param array 数组
 * @link https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/54
 */
// Array.isArray(arr)
// arr.constructor === Array
// Object.prototype.toString.call(arr) === '[Object Array]';
const flatten = array => array.reduce((acc, cur) => (Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur]), []);

export default {
    format,
    shuffle,
    throttle,
    flatten,
};
