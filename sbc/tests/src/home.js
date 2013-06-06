function messageSignCreator (unreadMessagesNumber){
	var messageSignStr ="";
	
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

// function AppViewModel(){
// 	this.userName 		= 'enFocus PH';
// 	this.messagesSign	= '1 Message';

// }

// //Activates KO.js
// ko.applyBindings(new AppViewModel());