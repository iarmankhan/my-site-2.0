const https = require('https');
const fs = require('fs');
const path = require('path');

const companies = [
  { name: 'Somethings', filename: 'somethings.png' },
  { name: 'Heyflow', filename: 'heyflow.png' },
  { name: 'Postman', filename: 'postman.png' },
  { name: 'Lobeco', filename: 'lobeco.png' },
  { name: 'Madespace', filename: 'madespace.png' },
  { name: 'InsightOrca', filename: 'insightorca.png' }
];

console.log('Logo files to be created:', companies.map(c => c.filename).join(', '));
console.log('\nPlease manually download the logos from the company websites and place them in:');
console.log('public/assets/companies/');
console.log('\nSuggested approach:');
console.log('1. Visit each company website');
console.log('2. Look for their logo (usually in header or footer)');
console.log('3. Right-click and save as PNG/JPEG');
console.log('4. Save to public/assets/companies/ with the filenames above');
