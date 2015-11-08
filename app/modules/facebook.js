/* exported tsModuleFacebook */
/* globals tsModule */
var tsModuleFacebook = function(){
  var obj = tsModule();
  obj.endpointTail = 'facebook';
  obj.moduleName = 'Facebook Friends';
  obj.moduleDescription = 'Connect to our Facebook App';
  obj.moduleCardElement = 'herro';

  // AJAX Resources
  obj.ajaxResources = {
    root: obj.endpointURL(),
  };

  return obj;
};
