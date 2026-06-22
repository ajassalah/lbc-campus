const fs = require('fs');
const path = 'src/data/courses.ts';
let content = fs.readFileSync(path, 'utf8');

let counter = 1;
content = content.replace(/id:\s*['"][^'"]+['"]/g, () => {
  const newId = `c${counter.toString().padStart(3, '0')}`;
  counter++;
  return `id: "${newId}"`;
});

fs.writeFileSync(path, content);
console.log('Fixed IDs. Total courses:', counter - 1);
