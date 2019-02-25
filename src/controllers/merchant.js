/**
 * Merchant Library
 * Library for RSO customer calls
 * 
 * @version 1.0.0
 * @author Ryan Seymour
 * @license MIT
 */



const merchantInfo = async (url, token) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    const result = await response.json();
    return result

  } catch (e) {
    throw new Error('Unable to get merchant info')
  }
}

const updateMerchant = async (url, token, info) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(info)
    });
    const result = await response.json();
    return result
  } catch(e) {
    throw new Error('Unable to update merchant info')
  }
}




 export { merchantInfo, updateMerchant }