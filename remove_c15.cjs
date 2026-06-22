const fs = require('fs');
const path = 'src/data/courses.ts';
let code = fs.readFileSync(path, 'utf8');

const regex = /\{\s*id:\s*['"`]c15['"`][\s\S]*?slug:\s*['"`]fast-track-business['"`][\s\S]*?Complete your UK Bachelor's degree in 9 months with prior diploma credit\.['"`],\s*\},?\s*/;
if (regex.test(code)) {
  code = code.replace(regex, '');
  fs.writeFileSync(path, code);
  console.log('Removed course c15 Fast Track Top-Up: BA Business');
} else {
  console.log('Course not found');
}
