/**
 * Customer Library
 * Library for RSO customer calls
 * 
 * @version 1.0.0
 * @author Ryan Seymour
 * @license MIT
 */

class Customer {
  constructor(username, firstName, lastName, email, {shipping_info: {
    shipping_address1,
    shipping_address2,
    shipping_city,
    shipping_state,
    shipping_zip
  }},
  {billing_info: {
   billing_address1,
   billing_address2,
   billing_city,
   billing_state,
   billing_zip
 }}) {
   this.username = username;
   this.firstname = firstName;
   this.lastName = lastName;
   this.email = email;
   this.shipping_info[0][shipping_address1] = shipping_info[0][shipping_address1];
   this.shipping_info[0][shipping_address2] = shipping_info[0][shipping_address2];
   this.shipping_info[0][shipping_city] = shipping_info[0][shipping_city];
   this.shipping_info[0][shipping_state] = shipping_info[0][shipping_state];
   this.shipping_info[0][shipping_zip] = shipping_info[0][shipping_zip];

   this.billing_info[0][billing_address1] = billing_info[0][billing_address1];
   this.billing_info[0][billing_address2] = billing_info[0][billing_address2];
   this.billing_info[0][billing_city] = billing_info[0][billing_city];
   this.billing_info[0][billing_state] = billing_info[0][billing_state];
   this.billing_info[0][billing_zip] = billing_info[0][billing_zip];
   
   
 }
}