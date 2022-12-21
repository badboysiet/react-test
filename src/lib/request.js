import axios from 'axios';

const self = {
	method: "GET",
	headers: {
		'Content-Type': 'application/json',
	},
	fingerPrint: '',
	setMethod: function (method) {
		self.method = method;
		return self;
	},
	setHeader: function (key, value) {
		self.headers[key] = value;
		return self;
	},
	reset: function () {
		self.method = "GET";
		self.headers = { "Content-Type": "application/json" };
		return self;
	},
	handleApiError: function () {
	},
	setFingerPrint: function (fingerPrint) {
		self.fingerPrint = fingerPrint;
		return self;
	},
	sendRequest: function (url, data, authenticate, callback) {	
        console.log('authenticate', authenticate)
		if (self.fingerPrint) {
			self.setHeader('fingerPrint', self.fingerPrint)
		} else {
			let fingerPrintFromCookies = ""
			self.setHeader('fingerPrint', '');
			self.setFingerPrint(fingerPrintFromCookies);
		}
		return axios({
			method: self.method,
			url: url,
			responseType: 'json',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			data: data,
			timeout: 120000,
			params: (self.method == "GET") ? data : {}
		})
			.then(function (response) {
				self.reset();
				callback(response);
			})
			.catch(function (error) {
				console.error("API LIB ERROR : ", error);
			});
	},
}

export default self;