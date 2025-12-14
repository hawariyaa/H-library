import { Chapa } from 'chapa-nodejs';
import dotenv from 'dotenv'
dotenv.config()
Secretkey = process.env.Secret_key 

const chapa = new Chapa({
  secretKey: Secretkey,
});

const tx_ref = await chapa.genTxRef(); // result: TX-JHBUVLM7HYMSWDA

// Or with options

const tx_ref = await chapa.genTxRef({
  removePrefix: false, // defaults to `false`
  prefix: 'TX', // defaults to `TX`
  size: 20, // defaults to `15`
});

// Generate transaction reference using our utility method or provide your own
const tx_ref = await chapa.genTxRef();

const response = await chapa.initialize({
  first_name: 'John',
  last_name: 'Doe',
  email: 'john@gmail.com',
  phone_number: '0911121314',
  currency: 'ETB',
  amount: '200',
  tx_ref: tx_ref,
  callback_url: 'https://example.com/',
  return_url: 'https://example.com/',
  customization: {
    title: 'Test Title',
    description: 'Test Description',
  },
});