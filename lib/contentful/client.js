// lib/contentful/client.js
const contentful = require('contentful');

// Create your Contentful client instance
export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = client