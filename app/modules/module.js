//Functional Class
var tsModule = function(){
  that = {};

  //API Endpoint Configuration
  that.endpointHead = 'https://zyxk3wqzue.execute-api.us-east-1.amazonaws.com/prod/';
  that.endpointTail = 'core';

  //Module Metadata
  that.moduleName = 'ts-module';
  that.moduleDescription = 'The base class for TimeShift Polymer Modules';

  //Function to initialize card
  that.initCard = function(cardRef){
    cardRef.module = that;
  }

  return that;
}
