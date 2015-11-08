(function(document){
  // Create a login event handler
  document.tsLogin = function(loginData){
    //TODO
    var token = loginData.detail;
    console.log('Recvd token: ', token); //TODO: remove
    //TODO: validate token
    // Set token
    localStorage.setItem('tsToken', JSON.stringify(token));
    // Debug logging
    console.log('Token: ', localStorage.getItem('tsToken'));
    // Load main website
    window.location = '/';
  };
})(document);
