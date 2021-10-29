const fs = require('fs');
const path = require('path');

function fail(msg) {
  console.error('FAIL ' + msg);
  process.exit(1);
}

const src = fs.readFileSync(path.join(__dirname, '..', 'README.md'), 'utf8');
if (!src.includes('# PDF2TXT')) fail('title');
if (!src.includes('Convert PDF files into TXT files')) fail('desc');
const lic = fs.readFileSync(path.join(__dirname, '..', 'LICENSE'), 'utf8');
if (!lic.includes('Apache License')) fail('apache');
if (!lic.includes('Version 2.0, January 2004')) fail('v2');
console.log('OK Pdf2TxtTests');
