var message = {

	getMessage: function (desiredMessageId, messageList){
		var desiredMessage;
		desiredMessage = _.find(messageList,function(message){return message.Id === desiredMessageId;});
		return desiredMessage;
	}
	// displayMessage: function (message) {
	// 	// body...
	// }
}