/* exported tsModuleClasses */
/* globals tsModule */
var tsModuleClasses = function(){
  var obj = tsModule();
  obj.endpointTail = 'tsClasses';
  obj.moduleName = 'Class List';
  obj.moduleDescription = 'A list of classes';
  obj.modulePage = 'classes';
  obj.modulePageElement = 'classes-page';

  // AJAX Resources
  obj.ajaxResources = {
    root: obj.endpointURL()
  };

  return obj;
};
