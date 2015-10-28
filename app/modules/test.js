var tsModuleTest = function(){
  that = tsModule();
  that.endpointTail = 'test';
  that.moduleName = 'Test TS Module';
  that.moduleDescription = 'A module to test polymer high-level elements';
  that.modulePage = 'test';
  that.modulePageElement = 'test-page';

  // AJAX Resources
  that.ajaxResources = {
    root: that.endpointURL(),
    test: that.endpointURL() + '/testdb'
  };

  return that;
}
