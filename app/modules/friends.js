/* exported tsModuleFriends */
/* globals tsModule */
var tsModuleFriends = function(){
  var obj = tsModule();
  obj.endpointTail = 'tsFriends';
  obj.moduleName = 'Friends List';
  obj.moduleDescription = 'A list of friends';
  obj.modulePage = 'friends';
  obj.modulePageElement = 'friends-page';

  // AJAX Resources
  obj.ajaxResources = {
    root: obj.endpointURL(),
    friendsList: obj.endpointURL() + '/friendsList',
    friendClasses: obj.endpointURL() + '/friendClasses'
  };

  return obj;
};
