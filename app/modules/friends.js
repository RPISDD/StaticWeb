/* exported tsFriends */
/* globals tsModule */
var tsFriends = function(){
  var obj = tsModule();
  obj.endpointTail = 'friends';
  obj.moduleName = 'Friends List';
  obj.moduleDescription = 'A list of friends';
  obj.modulePage = 'friends';
  obj.modulePageElement = 'friends-page';

  // AJAX Resources
  obj.ajaxResources = {
    root: obj.endpointURL()
  };

  return obj;
};
