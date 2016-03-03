// Underscore based diet plugin
'use strict';
const fs = require('fs');
const _ = require('underscore');
module.exports = function(options){
	
  options = options || {}
  options.ext = options.ext || 'tpl';
  options.path = options.path || './';
	
  return function($){
		$.htmlModule = function(template){
			
      const file = template ? template : 'index'; 
      const tpl = fs.readFileSync(options.path + file + '.' + options.ext).toString();
      let comp = _.template(tpl);
      const html = comp($.data);
      
			$.response.end(html);
      
			$.nextRoute();
		}
		$.return();
	}
}