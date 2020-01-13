window.app = {

	/**
	 * 后端服务发布的url地址
	 */
	serverUrl: 'http://10.0.0.18:8080',

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
	 * 弹出信息
	 * @param {Object} msg
	 * @param {Object} type
	 */
	showToast: function(msg, type) {
		plus.nativeUI.toast(msg, {
			icon: "image/" + type + ".png",
			verticalAlign: "center"
		})
	}

}
