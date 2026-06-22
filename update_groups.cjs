const fs = require('fs');
const path = 'src/data/courses.ts';
let code = fs.readFileSync(path, 'utf8');

const titlesToUpdate = [
  'Level 4 Diploma in Information Technology',
  'Level 4 Diploma in Business Management',
  'Level 4 Diploma in Tourism and Hospitality Management',
  'LEVEL 4 ADVANCED NATIONAL CERTIFICATE IN ENGLISH'
];

titlesToUpdate.forEach(title => {
  // We can construct a regex that looks for title: "X", followed by group: "Y"
  // Since it's multiline, we use [\s\S]*? to lazily match characters between title and group.
  const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp('(title:\\s*[\'"`]' + escapedTitle + '[\'"`][\\s\\S]*?group:\\s*[\'"`])[^\'"`]+([\'"`])');
  
  if(regex.test(code)) {
    code = code.replace(regex, '$1Fast Track$2');
    console.log('Updated group for', title);
  } else {
    console.log('Could not find or update group for', title);
  }
});

fs.writeFileSync(path, code);
