window.app = {

	/**
	 * 后端服务发布的url地址
	 */
	serverUrl: 'http://10.0.0.19:8080',
	
	/**
	 * 后端服务发布的url地址
	 */
	imageServerUrl: 'http://vbferu.natappfree.cc/eric/',

	/**
	 * 非空校验
	 * @param {Object} str
	 * @return {Boolean} true:非空 false:空
	 */
	isNotNull: function(str) {
		if (str != null && str != '' && str != undefined) {
			return true;
		}
		return false;
	},

	/**
	 * 封装消息提示框,默认mui不支持居中和自定义icon,所以使用H5+
	 * @param {Object} msg
	 * @param {Object} type
	 */
	showToast: function(msg, type) {
		plus.nativeUI.toast(msg, {
			icon: "image/" + type + ".png",
			verticalAlign: "center"
		})
	},

	/**
	 * 保存用户的全局对象
	 * @param {Object} user
	 */
	setUserGlobalInfo: function(user) {
		var userInfoStr = JSON.stringify(user);
		plus.storage.setItem("userInfo", userInfoStr);
	},

	/**
	 * 获取用户的全局对象
	 */
	getUserGlobalInfo: function() {
		var userInfoStr = plus.storage.getItem("userInfo");
		return JSON.parse(userInfoStr);
	},

}
