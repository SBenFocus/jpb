function messageSignCreator (unreadMessagesNumber) {
	"use strict";
	var messageSignStr = "";
	
	if (unreadMessagesNumber < 1){
		//Error
		}
	else if (unreadMessagesNumber === 1){
		messageSignStr = "1 Message";
		}
	else {
		messageSignStr = unreadMessagesNumber.toString() + " Messages";
		}
	return messageSignStr;
}


http://maps.googleapis.com/maps/api/staticmap?center=39.083333,-98.583333
// function AppViewModel(){
// 	this.userName 		= 'enFocus PH';
// 	this.messagesSign	= '1 Message';

// }

// //Activates KO.js
// ko.applyBindings(new AppViewModel());