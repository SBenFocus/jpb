function messageSignCreator (unreadMessagesNumber) {
 "use strict";
 var messageSignStr = "";
 
 if (unreadMessagesNumber < 0){
  
  }
 else if (true){

  }
 else if (unreadMessagesNumber === 1){
  messageSignStr = "1 Message";
  }
 else {
  messageSignStr = unreadMessagesNumber.toString() + " Messages";
  }
 return messageSignStr;
}

var Home = {

    post: function(url, data {
        return $.ajax();
    })

    showLoading: function(selector) {
        $(selector).button('loading');
    },
};

$(function() {
    window.homeViewModel = new HomeViewModel();
    ko.applyBindings(window.homeViewModel;)
});