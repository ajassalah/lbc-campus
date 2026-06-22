const fs = require('fs');
const content = fs.readFileSync('./src/data/courses.ts', 'utf8');
const ids = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const duplicates = ids.filter((item, index) => ids.indexOf(item) !== index);
console.log('Total IDs:', ids.length);
console.log('Unique IDs:', new Set(ids).size);
console.log('Duplicate IDs:', [...new Set(duplicates)]);
