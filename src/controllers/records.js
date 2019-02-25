

const createRecord = async (url, token, recordInfo) => {
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


const getRecords = async (token, limit = undefined, sort = 'asc', offset = undefined) => {
  let url;

  if (limit && sort && offset) {
    url = `https://www.recordstackoverflow.com/api/v1/records?limit=${limit}&sort=${sort}&offset=${offset}`
  } else if (limit && sort && !offset) {
    url = `https://www.recordstackoverflow.com/api/v1/records?limit=${limit}&sort=${sort}`
  } else if (limit && offset && !sort) {
    url = `https://www.recordstackoverflow.com/api/v1/records?limit=${limit}&offset=${offset}`
  } else if (limit && !offset && !sort) {
    url = `https://www.recordstackoverflow.com/api/v1/records?offset=${offset}`
  } else if (sort && offset && !limit) {
    url = `https://www.recordstackoverflow.com/api/v1/records?sort=${sort}&offset=${offset}`
  } else if (sort && !offset && !limit) {
    url = `https://www.recordstackoverflow.com/api/v1/records?sort=${sort}`
  } else if (offset && !sort && !limit) {
    url = `https://www.recordstackoverflow.com/api/v1/records?offset=${offset}`
  }

 
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

export { createRecord, getRecords }