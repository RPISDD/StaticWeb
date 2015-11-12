/* exported tsModuleFacebook */
/* globals tsModule */
var tsModuleFacebook = function(){
  var obj = tsModule();
  obj.endpointTail = 'tsFacebook';
  obj.moduleName = 'Facebook Friends';
  obj.moduleDescription = 'Connect to our Facebook App';
  obj.moduleCardElement = 'facebook-card';

  // AJAX Resources
  obj.ajaxResources = {
    root: obj.endpointURL(),
    friendList: obj.endpointURL() + '/friendList'
  };

  return obj;
};
