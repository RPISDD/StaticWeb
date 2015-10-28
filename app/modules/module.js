//Functional Class
var tsModule = function(){
  var obj = {};

  //API Endpoint Configuration
  obj.endpointHead = 'https://zyxk3wqzue.execute-api.us-east-1.amazonaws.com/prod/';
  obj.endpointTail = 'core';
  obj.endpointURL = function(){
    var url = obj.endpointHead + obj.endpointTail;
    return url;
  }
  obj.ajaxResources = null;
  //Module Metadata
  obj.moduleName = 'ts-module';
  obj.moduleDescription = 'The base class for TimeShift Polymer Modules';
  obj.modulePage = null;
  obj.modulePageElement = null;
  obj.moduleIronIcon = 'extension';

  //Function to initialize card
  //Take obj as an argument so we get static method behavior
  obj.initCard = function(obj, cardRef){
    cardRef.module = obj;
  };

  return obj;
};
