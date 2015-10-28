var tsLogin = function(){
  obj = tsModule();
  obj.endpointTail = 'login';
  obj.moduleName = 'Login Module';
  obj.moduleDescription = 'Login and Registration';
  obj.modulePage = 'login';
  obj.modulePageElement = 'login-page';

  // AJAX Resources
  obj.ajaxResources = {
    root: obj.endpointURL(),
    test: obj.endpointURL() + '/testdb'
  };

  return obj;
}
