/**
 * Customer Library
 * Library for RSO customer calls
 * 
 * @version 1.0.0
 * @author Ryan Seymour
 * @license MIT
 */



const customerInfo = async (token, customerId) => {
  let url = `https://www.recordstackoverflow.com/api/v1/customers/${customerId}`
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
    throw new Error('Unable to get customer info')
  }
}

const updateCustomer = async (token, customerId, info) => {

  const url = `https://www.recordstackoverflow.com/api/v1/customers/${customerId}`

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
    throw new Error('Unable to update customer info')
  }
}




 export { customerInfo, updateCustomer }