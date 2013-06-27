describe("getMessage",function(){
	var sampleMessage1, sampleMessage2, sampleMessageArray;
	beforeEach(function() {
			sampleMessage1 = 	{Id: 001,
		 					 	from: "Doctor P",
		 					 	to: "Sue P",
		 					 	regarding: "Lizzy P",
		 					 	subject: "Lizzy's Bananas",
		 					 	content: "lorem ipsum"},
		 	sampleMessage2 = 	{Id: 002,
		 					 	from: "Doctor P",
		 					 	to: "Sue P",
		 					 	regarding: "Sue P",
		 					 	subject: "Lizzy's Bananas",
		 					 	content: "lorem ipsum"};
	  	sampleMessageArray = [sampleMessage1, sampleMessage2];
	});
	it("should return the desired message", function() {
	  var desiredMessageId = 002, desiredMessage;
	  desiredMessage = message.getMessage(desiredMessageId, sampleMessageArray);
	  expect(desiredMessage.regarding).toEqual("Sue P");
	});
	it("should not return the undesired message", function() {
	  var desiredMessageId = 001, desiredMessage;
	  desiredMessage = message.getMessage(desiredMessageId, sampleMessageArray);
	  expect(desiredMessage.regarding).toNotEqual("Sue P");
	});
});

