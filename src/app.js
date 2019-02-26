import { customerInfo, updateCustomer } from './controllers/customer'
import { merchantInfo, updateMerchant } from './controllers/merchant'
import { createRecord, getRecords, getMerchantRecords } from './controllers/records'

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGV4YW1wbGUuY29tIiwidXNlcm5hbWUiOiJjdXN0b21lck5hbWUiLCJfaWQiOiI1YzY3NzdkMWQ2YTc0NzAwMTdkZTMzYzMiLCJmaXJzdE5hbWUiOiJGaXJzdCIsImxhc3ROYW1lIjoiTmFtZSIsImlhdCI6MTU1MDI4NDk5N30.B4UEsIFGrHAbuegOFGvAN4Y676XaBC6_sPlARRTmDb4'

const customerId = '5c6777d1d6a7470017de33c3'

const merchantToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjaGFudEFjY291bnQiOnRydWUsImNvbXBhbnlOYW1lIjoiQ29tcGFueSBOYW1lIiwicHJpbWFyeUNvbnRhY3QiOiJQcmltYXJ5IENvbnRhY3QiLCJlbWFpbCI6ImVtYWlsQHRlc3Rjby5jb20iLCJfaWQiOiI1YzY3OTc1MWJiMTAyYzAwMTcwNmJmMGEiLCJpYXQiOjE1NTAyOTI4NDh9._M0GWkuCmh5If1D3k1pg01OdFFngehtlE6Mip80ZI9o'

const merchantId = '5c679751bb102c001706bf0a'


// CUSTOMER METHODS *******************************************************************************************

/*

// GET CUSTOMER INFO
customerInfo(token, customerId)
  .then(customer => console.log(customer.billing_info[0].billing_city))

  // UPDATE CUSTOMER
updateCustomer(token, customerId, {username: 'newUserName'})
  .then(customer => console.log(customer.shipping_info))

*/



// MERCHANT METHODS *******************************************************************************************

/*

// GET MERCHANT INFO
merchantInfo(merchantToken, merchantId)
  .then(merchant => console.log(merchant.address[0].shipping_city))

  // UPDATE CUSTOMER
updateMerchant(merchantToken, merchantId, {primaryContact: 'New Contact'})
  .then(merchant => console.log(merchant.address[0].shipping_address1, merchant))

*/

// RECORD METHODS (include as a merchant method when using classes)

/*

createRecord(merchantToken, {
  artist: 'The Beatles',
  title: 'Rubber Soul',
  price: '60.00',
  condition: 'g',
  comments: ['Original pressing']
})
  .then(record => console.log(record))

getRecords(merchantToken, { limit: 1, artist: 'The Beatles', sort: 'desc' })
  .then(records => console.log(records))

getMerchantRecords(merchantToken, merchantId, {sort: 'asc', limit: 2, offset: 1})
  .then(records => console.log(records))
*/




