describe("messageSignCreator", function() {
  it("should say 1 Message when input is 1", function() {
    var testMessageNum = 1;
    expect(messageSignCreator(testMessageNum)).toEqual('1 Message');
  });
  it("should say 3 Messages when input is 3", function() {
    var testMessageNum = 3;
    expect(messageSignCreator(testMessageNum)).toEqual('3 Messages');    
  });
 });