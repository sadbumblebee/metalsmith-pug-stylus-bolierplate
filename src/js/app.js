// NPM modules
var _ = {};
_.assign = require('lodash.assign');

var d3 = _.assign({},
  require("d3-selection"),
  require("d3-request")
);


function init() {
  // d3.select('p').remove()
}

// Bind on-load handler
document.addEventListener("DOMContentLoaded", function () {
  init();
});