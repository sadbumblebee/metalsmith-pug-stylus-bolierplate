// NPM modules
// Use whatever you like
var _ = {};
_.assign = require('lodash.assign');

var d3 = _.assign({},
  require("d3-selection"),
  require("d3-request")
);


function init() {
  
}

// Bind on-load handler
document.addEventListener("DOMContentLoaded", () => {
  init();
});