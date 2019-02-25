import { customerInfo, updateCustomer } from './controllers/customer'
import { merchantInfo, updateMerchant } from './controllers/merchant'

import { createRecord, getRecords } from './controllers/records'

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGV4YW1wbGUuY29tIiwidXNlcm5hbWUiOiJjdXN0b21lck5hbWUiLCJfaWQiOiI1YzY3NzdkMWQ2YTc0NzAwMTdkZTMzYzMiLCJmaXJzdE5hbWUiOiJGaXJzdCIsImxhc3ROYW1lIjoiTmFtZSIsImlhdCI6MTU1MDI4NDk5N30.B4UEsIFGrHAbuegOFGvAN4Y676XaBC6_sPlARRTmDb4'

const customer1 = '5c6777d1d6a7470017de33c3'

const merchantToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjaGFudEFjY291bnQiOnRydWUsImNvbXBhbnlOYW1lIjoiQ29tcGFueSBOYW1lIiwicHJpbWFyeUNvbnRhY3QiOiJQcmltYXJ5IENvbnRhY3QiLCJlbWFpbCI6ImVtYWlsQHRlc3Rjby5jb20iLCJfaWQiOiI1YzY3OTc1MWJiMTAyYzAwMTcwNmJmMGEiLCJpYXQiOjE1NTAyOTI4NDh9._M0GWkuCmh5If1D3k1pg01OdFFngehtlE6Mip80ZI9o'

const merchant1 = '5c679751bb102c001706bf0a'


// CUSTOMER METHODS *******************************************************************************************

/*

// GET CUSTOMER INFO
customerInfo(`https://www.recordstackoverflow.com/api/v1/customers/${customer1}`, token)
  .then(customer => console.log(customer.billing_info[0].billing_city))


// UPDATE CUSTOMER
updateCustomer(`https://www.recordstackoverflow.com/api/v1/customers/${customer1}`, token, {username: 'newUserName'})
  .then(customer => console.log(customer.shipping_info))

*/




// MERCHANT METHODS *******************************************************************************************

// GET MERCHANT INFO
/*
customerInfo(`https://www.recordstackoverflow.com/api/v1/merchants/${merchant1}`, merchantToken)
  .then(merchant => console.log(merchant.address[0].shipping_city))

// UPDATE CUSTOMER
updateMerchant(`https://www.recordstackoverflow.com/api/v1/merchants/${merchant1}`, merchantToken, {primaryContact: 'New Contact'})
  .then(merchant => console.log(merchant.address[0].shipping_address1))

*/



// RECORD METHODS (include as a merchant method when using classes)

/*
createRecord('https://www.recordstackoverflow.com/api/v1/records', merchantToken, {
  artist: 'The Beatles',
  title: 'Abbey Road',
  price: '50.00',
  condition: 'vg',
  comments: ['This is in great shape', 'Original pressing']
})
  .then(record => console.log(record))
*/


getRecords(merchantToken, '', 'asc', 5)
  .then(records => console.log(records))



// const getRecords = async (token, artist, limit, sort, offset) => {
//   let url = `https://www.recordstackoverflow.com/api/v1/records?limit=${limit}&sort=${sort}&offset=${offset}`
//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': token
//       }
//     })
//     const result = await response.json();
//     return result

//   } catch (e) {
//     throw new Error('Unable to retrieve records')
//   }
// }