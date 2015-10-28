var tsModuleTest = function(){
  obj = tsModule();
  obj.endpointTail = 'test';
  obj.moduleName = 'Test TS Module';
  obj.moduleDescription = 'A module to test polymer high-level elements';
  obj.modulePage = 'test';
  obj.modulePageElement = 'test-page';

  // AJAX Resources
  obj.ajaxResources = {
    root: obj.endpointURL(),
    test: obj.endpointURL() + '/testdb'
  };

  return obj;
}
