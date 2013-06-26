function HomeViewModel(){
    var model = {};
    model.userName   = 'enFocus PH';
    model.messagesSign = ko.observable('1 Message');

    var messageSignCreator = function() {

    }

    model.loadData = fucntion() {
        Home.showLoading();
    }

    model.getMessageCount = fucntion() {
        indexPage.post('/', {})
            .done(function(result)) {
                this.messageSign(messageSignCreator());
            })
            .fail()

    };

    model.getMessageCount();

    return model;
}
Activates KO.js
ko.applyBindings(new AppViewModel());