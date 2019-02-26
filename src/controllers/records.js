

const createRecord = async (token, recordInfo) => {
  const url = 'https://www.recordstackoverflow.com/api/v1/records'
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(recordInfo)
    });
    const result = await response.json();

    return result

  } catch(e) {
    throw new Error('Unable to create new record')
  }
}


const getRecords = async (token, parameters) => {

  const queryString = new URLSearchParams(parameters)
  let url;
  parameters ? url = `https://www.recordstackoverflow.com/api/v1/records?${ queryString.toString() }` : url = `https://www.recordstackoverflow.com/api/v1/records`

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
    throw new Error('Unable to retrieve records')
  }
}

const getMerchantRecords = async (token, merchantId, parameters) => {

  const queryString = new URLSearchParams(parameters)
  let url;
  parameters ? url = `https://www.recordstackoverflow.com/api/v1/records/merchants/${merchantId}?${ queryString.toString() }` : url = `https://www.recordstackoverflow.com/api/v1/merchants/${merchantId}`

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
    throw new Error('Unable to retrieve records')
  }
}








export { createRecord, getRecords, getMerchantRecords }