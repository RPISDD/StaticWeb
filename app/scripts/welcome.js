(function(document){
  // Create a login event handler
  document.tsLogin = function(loginData){
    /* jshint camelcase: false */
    var token = loginData.detail.parseResponse().replyObject;
    // Set token
    localStorage.setItem('tsToken', JSON.stringify(token));
    // Debug logging
    console.log('Token: ', localStorage.getItem('tsToken'));
    // Load main website
    window.location = '/';
  };
  document.tsPreLogin = function(loginData){
    var RIN = loginData.detail.RIN;
    // Set RIN token
    localStorage.setItem('tsRIN', JSON.stringify(RIN));
  };
})(document);
