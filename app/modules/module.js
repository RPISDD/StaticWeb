//Functional Class
var tsModule = function(){
  var that = {};

  //API Endpoint Configuration
  that.endpointHead = 'https://zyxk3wqzue.execute-api.us-east-1.amazonaws.com/prod/';
  that.endpointTail = 'core';

  //Module Metadata
  that.moduleName = 'ts-module';
  that.moduleDescription = 'The base class for TimeShift Polymer Modules';
  that.modulePage = null;
  that.modulePageElement = null;
  that.moduleIronIcon = 'extension';

  //Function to initialize card
  //Take that as an argument so we get static method behavior
  that.initCard = function(that, cardRef){
    cardRef.module = that;
  };

  return that;
};
