/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Set the title
  document.title = 'TimeShift';

  app.displayInstalledToast = function() {
    // Check to make sure caching is actually enabled—it won't be in the dev environment.
    if (!document.querySelector('platinum-sw-cache').disabled) {
      document.querySelector('#caching-complete').show();
    }
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    //console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  // Main area's paper-scroll-header-panel custom condensing transformation of
  // the appName in the middle-container and the bottom title in the bottom-container.
  // The appName is moved to top and shrunk on condensing. The bottom sub title
  // is shrunk to nothing on condensing.
  addEventListener('paper-header-transform', function(e) {
    var appName = document.querySelector('#mainToolbar .app-name');
    var middleContainer = document.querySelector('#mainToolbar .middle-container');
    var bottomContainer = document.querySelector('#mainToolbar .bottom-container');
    var detail = e.detail;
    var heightDiff = detail.height - detail.condensedHeight;
    var yRatio = Math.min(1, detail.y / heightDiff);
    var maxMiddleScale = 0.50;  // appName max size when condensed. The smaller the number the smaller the condensed size.
    var scaleMiddle = Math.max(maxMiddleScale, (heightDiff - detail.y) / (heightDiff / (1-maxMiddleScale))  + maxMiddleScale);
    var scaleBottom = 1 - yRatio;

    // Move/translate middleContainer
    Polymer.Base.transform('translate3d(0,' + yRatio * 100 + '%,0)', middleContainer);

    // Scale bottomContainer and bottom sub title to nothing and back
    Polymer.Base.transform('scale(' + scaleBottom + ') translateZ(0)', bottomContainer);

    // Scale middleContainer appName
    Polymer.Base.transform('scale(' + scaleMiddle + ') translateZ(0)', appName);
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onDataRouteClick = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
    document.getElementById('mainContainer').scrollTop = 0;
  };

  // Check if user has a valid authentication token
  var validToken = function(){
    if(localStorage.getItem('tsRIN') === 'null' ||
        localStorage.getItem('tsRIN') === null){
      return false;
    }
    return (localStorage.getItem('tsToken') !== 'null') && 
      (localStorage.getItem('tsToken') !== null);
  };
  // Check token and automatically log out if token is invalid
  document.checkToken = function(){
    console.log('Checking token');
    if(validToken() === false){
      window.location = '/welcome.html';
      return;
    }
    console.log('Token is valid');
  };
  // Check token on page load
  document.checkToken();
  // Helper function to get auth token
  document.getToken = function(){
    if(validToken === false){
      document.checkToken();
      return null;
    }
    return JSON.parse(localStorage.getItem('tsToken'));
  };
  // Generate an HTTP header with the token for REST reqeusts
  document.getTokenHeader = function() {
    var headers = {};
    headers.Authorization = 'Bearer ' + localStorage.getItem('tsToken');
    return headers;
  };

  // Helper to get RIN
  document.getRIN = function(){
    var rinStr = localStorage.getItem('tsRIN');
    console.log('Stored RIN', rinStr);
    var RIN = parseInt(JSON.parse(localStorage.getItem('tsRIN')));
    console.log('Got RIN', RIN);
    return RIN;
  };
})(document);
