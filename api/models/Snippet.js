/**
 * Snippet
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	content : {
  		type : "string",
  		required : true,
  		defaultsTo : "Content here"
  	},
  	// references language
  	language : {
  		type : "integer"
  	},
  	// references user
  	contributor : {
  		type : "integer",
  		required : true
  	},
  	created : {
  		type : "date",
  		required : true,
  		defaultsTo : new Date()
  	},
  	updated : {
  		type : "date",
  		required : true,
  		defaultsTo : new Date()
  	}
  }

};
