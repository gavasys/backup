'use strict';

//const querystring = require('node:querystring');

module.exports.hello = async (event) => {
  //const body = querystring.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola`,
        input: event.name,
      },
      null,
      2
    ),
  };
 
};


module.exports.showUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Peticion POST`,
        input: event.body,
      },
      null,
      2
    ),
  };
 
};

