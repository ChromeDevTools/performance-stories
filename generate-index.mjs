import fs from 'node:fs';
import { exec, execSync } from 'node:child_process';

const dirs = fs
  .readdirSync('./', { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .filter((d) => !d.name.startsWith('.') && d.name !== 'node_modules');

const listItems = dirs.map((dirent) => {
  const dirname = dirent.name;
  console.assert(fs.statSync(`${dirname}/index.html`)); // throw if no index.html
  return `<li><a href="${dirname}/index.html">${dirname}</a></li>`;
});

const html = `
<!doctype html>
<style>
  head, title { display: block; font-weight: bold; margin: 8px; }
  html { font-size: 200%}
</style>
<title>performance-stories index</title>
<ul>
  ${listItems.join('\n')}
</ul>
`;

fs.writeFileSync('index.html', html, 'utf-8');
console.log('Wrote:', `${process.cwd()}/index.html`);

if (process.argv.includes('--validate')) {
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  if (status.trim().length > 0) {
    console.error('ERROR: Unexpected git diff after validating index');
    const fullStatus = execSync('git status', { encoding: 'utf8' });
    console.log(fullStatus);
    console.error(
      'Make sure you have run `npm run genindex` to update the index page.',
    );
    process.exit(1);
  }
}
