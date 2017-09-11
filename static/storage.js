/**
 * [set 存储对象到本地storage]
 * @param {[type]} name [储存的名字]
 * @param {[type]} val  [储存的值(对象)]
 */
function set(name,val){
	// 在存储时把对象改写成JSON格式的字符串再存
	var json = JSON.stringify(val)
	// 储存到本地
	return localStorage.setItem(name,json)
}
/**
 * [get 获取本地的存储的数据]
 * @param  {[type]} name [用来获取对应的对象]
 * @return {[type]}      [返回JSON格式的对象]
 */
function get(name){
	// 获取name对应的数据
	var data = localStorage.getItem(name)
	return JSON.parse(data)
}

// 导出
export default{
	set,
	get
}