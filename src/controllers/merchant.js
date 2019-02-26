/**
 * Merchant Library
 * Library for RSO customer calls
 * 
 * @version 1.0.0
 * @author Ryan Seymour
 * @license MIT
 */



const merchantInfo = async (token, merchantId) => {
  const url = `https://www.recordstackoverflow.com/api/v1/merchants/${merchantId}`
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

const updateMerchant = async (token, merchantId, info) => {
  const url = `https://www.recordstackoverflow.com/api/v1/merchants/${merchantId}`
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