import {
    get,
    isArray,
    isEmpty,
} from 'lodash';


/**
 * Redirect to email.
 */

export const redirectToEmail =()=> {
    let contactEmail = 'michaeldinnall.com';
   return `mailto:${contactEmail}?subject= Lets swap a class`;
}

/**
 * Transform.
 */

export const transformCollegeJSON =(institutions = [])=> {
  let result = [];

    for(let k = 0; k <= institutions.length; k++){   
            result.push({
            "value":institutions[college]['institution'],
            "label":institutions[college]['institution']
        })
    }
    return result
}


