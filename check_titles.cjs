const fs = require('fs');
const content = fs.readFileSync('./src/data/courses.ts', 'utf8');
const titles = [...content.matchAll(/title:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const duplicates = titles.filter((item, index) => titles.indexOf(item) !== index);
console.log('Duplicate Titles:', [...new Set(duplicates)]);
