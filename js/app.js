window.app = {

	/**
	 * 后端服务发布的url地址
	 */
	// serverUrl: 'http://192.168.171.130:8080/rtc/api',
	serverUrl: 'http://192.168.0.197:8080/rtc/api',

	/**
	 * 后端服务发布的url地址
	 */
	imageServerUrl: 'http://bfghts.natappfree.cc/eric/',

	userInfo: null,

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
	 * 保存用户的token
	 * @param {Object} aiToken
	 */
	setToken: function(aiToken) {
		plus.storage.setItem("aiToken", aiToken);
	},

	/**
	 * 获取用户的token
	 */
	getToken: function() {
		var token = plus.storage.getItem("aiToken");
		return token;
	},

	getUserGlobalInfo: function() {
		mui.ajax("http://192.168.0.197:8080/rtc/api/checkToken", {
			data: {
				"token": plus.storage.getItem("aiToken")
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			// timeout: 10000, //超时时间设置为10000秒；
			async: false,
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(data) {

				if (data.code == 200) {
					window.userInfo = data.data;
				} else {
					console.log("data.data is null");
					plus.nativeUI.toast(data.message, {
						icon: "image/error.png",
						verticalAlign: "center"
					});
				}
			},
			error: function(xhr, type, errorThrown) {
				//异常处理；
				console.log(type);
				console.log(JSON.stringify(xhr));
				plus.nativeUI.toast("获取用户信息失败", {
					icon: "image/error.png",
					verticalAlign: "center"
				});
			}
		});
		return window.userInfo;
	},

	/**
	 * 登出后，移除用户全局对象
	 */
	userLogout: function() {
		plus.storage.removeItem("aiToken");
	},

	/**
	 * 保存用户的联系人列表
	 * @param {Object} contactList
	 */
	setContactList: function(contactList) {
		var contactListStr = JSON.stringify(contactList);
		plus.storage.setItem("contactList", contactListStr);
	},

	/**
	 * 获取本地缓存中的联系人列表
	 */
	getContactList: function() {
		var contactListStr = plus.storage.getItem("contactList");

		if (!this.isNotNull(contactListStr)) {
			return [];
		}

		return JSON.parse(contactListStr);
	},

}
