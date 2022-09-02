// read all folders from root except _scripts
const util = require('util');
const fs = require('fs');
const path = require('path');
const exec = util.promisify(require('child_process').exec);

const root = path.join(__dirname, '..');
const disallowList = ['_scripts', '.git', '.vscode']
const folders = fs.readdirSync(root)
  .filter(f => !disallowList.find(filter => filter === f))
  .filter(f => fs.lstatSync(f).isDirectory());

const upgradeStorybook = async (folder) => {
  console.log(`🏃‍♂️ Running ${folder}`);
  const { stdout } = await exec('npx storybook@future upgrade --prerelease --yes', { cwd: path.join(root, folder) });
  console.log(`✅ Done with ${folder}`);
  if (process.env.DEBUG) {
    console.log(`${folder}:\n`, stdout);
  }
}

(async () => {
  await Promise.all(folders.map(upgradeStorybook))
  console.log(`✅ Done with everything!`);
})()
