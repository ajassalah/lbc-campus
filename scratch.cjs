const fs = require('fs');
const files = [
  'C:/Users/aaa/.gemini/antigravity-ide/brain/0f387bec-2809-4a98-877d-04b7680d20e3/.system_generated/steps/119/content.md',
  'C:/Users/aaa/.gemini/antigravity-ide/brain/0f387bec-2809-4a98-877d-04b7680d20e3/.system_generated/steps/120/content.md',
  'C:/Users/aaa/.gemini/antigravity-ide/brain/0f387bec-2809-4a98-877d-04b7680d20e3/.system_generated/steps/121/content.md'
];

files.forEach((f, i) => {
  const html = fs.readFileSync(f, 'utf8');
  const mainMatch = html.match(/<div data-elementor-type="wp-page"[^>]*>([\s\S]*?)<\/section>\s*<\/div>\s*<\/div>/);
  const content = mainMatch ? mainMatch[1] : html;
  
  const text = content
    .replace(/<style[^>]*>.*?<\/style>/gs, '')
    .replace(/<script[^>]*>.*?<\/script>/gs, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
    
  console.log(`\n\n--- FILE ${i + 1} ---`);
  console.log(text.substring(0, 5000));
});
