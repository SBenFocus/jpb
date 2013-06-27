var message = {
	getMessage: function (desiredMessageId, messageList){
		var desiredMessage;
		desiredMessage = _.find(messageList,function(message){return message.Id === desiredMessageId;});
		return desiredMessage;
	}
}
var messageViewModal = {
	Id: 			"#messageViewModal",
	subject: 		"#modalSubject",
	from:  			"#modalFrom",
	to:  			"#modalTo",
	regarding: 		"#modalRegarding",
	messageContent: "#modalContent",
	displayMessage: function (myMessage) {
		$(this.Id).modal('hide');
		$(this.subject).text(myMessage.subject);
		$(this.from).text(myMessage.from);
		$(this.to).text(myMessage.to);		
		$(this.regarding).text(myMessage.regarding);
		$(this.messageContent).text(myMessage.messageContent);
		$(this.Id).modal('show');
	}
}
var messageRespondModal = {

}

$(function(){
	// sample messageArray
	var sampleMessage1, sampleMessage2, sampleMessageArray;

			sampleMessage1 = 	{Id: 001,
		 					 	from: "Doctor P",
		 					 	to: "Sue P",
		 					 	regarding: "Lizzy P",
		 					 	subject: "Lizzy's Bananas",
		 					 	messageContent: "lorem ipsum"},
		 	sampleMessage2 = 	{Id: 002,
		 					 	from: "Doctor P",
		 					 	to: "Sue P",
		 					 	regarding: "Sue P",
		 					 	subject: "Lizzy's Bananas",
		 					 	messageContent: "lorem ipsum"};
		 	sampleMessage3 = 	{Id: 003,
		 					 	from: "Doctor P",
		 					 	to: "Sue P",
		 					 	regarding: "Sue P",
		 					 	subject: "Lizzy's Bananas",
		 					 	messageContent: "lorem ipsum"};
		 	sampleMessage4 = 	{Id: 004,
		 					 	from: "Doctor P",
		 					 	to: "Sue P",
		 					 	regarding: "Sue P",
		 					 	subject: "Lizzy's Bananas",
		 					 	messageContent: "lorem ipsum"};	 					 	
	  	sampleMessageArray = 	[sampleMessage1, sampleMessage2, sampleMessage3, sampleMessage4];

	  	$('tr').on('click',function(){
	  		var messageId = parseInt($(this).attr("id"));
	  		var desiredMessage = message.getMessage(messageId, sampleMessageArray);
	  		messageViewModal.displayMessage(desiredMessage);
	  	});

});