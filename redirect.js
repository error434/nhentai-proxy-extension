
chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		url = details.url 
		newurl = url.replace("nhentai.net/g/","proxy.error434.xyz/")
		return {redirectUrl: newurl};
		
	}, 

	{
		urls:[
			"https://nhentai.net/g/*"
		],
		types: [
			"main_frame","sub_frame"
		]
	}, 
	["blocking"]
);

    