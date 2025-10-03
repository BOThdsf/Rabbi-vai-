রাব্বি  fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("RABBI VAI Bokasoda")==0 || event.body.indexOf("RABBI VAI mc")==0 || event.body.indexOf("chod")==0 || event.body.indexOf("RABBI VAI nodir pola")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("RABBI VAI re chudi")==0 || event.body.indexOf("RABBI VAI re chod")==0 || event.body.indexOf("RABBI VAI Abal")==0 || event.body.indexOf("RABBI VAI Boakachoda")==0 || event.body.indexOf("RABBI VAI madarchod")==0 || event.body.indexOf("RABBI VAI re chudi")==0 || event.body.indexOf("RABBI Bokachoda")==0) {
		var msg = {
				body: "তোর মতো বোকাচোদা রে আমার বস রাব্বি চু*দা বাদ দিছে🤣\nরাব্বি এখন আর hetars চুষে না🥱😈",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
