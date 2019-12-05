/* 生成接口，并将接口挂载到vue的原型上
 * @Author: nowThen
 * @Date: 2019-08-14 16:41:37
 */

import Vue from 'vue';
import request from './ajax';
import {
	apiUrl
} from './api';

let services = {};

Object.entries(apiUrl).forEach((item) => {
	services[item[0]] = function(options = {}) {
		return request(Object.assign({
			url: item[1]
		}, options))
	}
})

// 将services挂载到vue的原型上
// 业务中引用的方法：this.$services.接口名（小驼峰）
Object.defineProperty(Vue.prototype, '$ajax', {
	value: services
});

export default services;


// this.$services.qryPageConfig({
// 	method: 'get', //默认
// 	params: {
// 		page: 'login'
// 	},
// 	data:{ //post
// 	}
// }).then((res) => {
// 	this.pageConfig = res.data;
// }).finally(() => {
// 	...
// 	this.close();
// });