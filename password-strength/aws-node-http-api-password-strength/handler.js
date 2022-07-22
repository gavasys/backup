"use strict";
const verifyPasswordLength = requiere ('./constraints/verifyPasswordLength');
module.exports.password = async (event, context) => {
  try {
    const {password}=event.pathParameters;
    return{
      statusCode: 200,
      body: JSON.stringify({

        message: 'Todo OK' + password
      })
    }
    
  } catch (e) {
    
  }
};
