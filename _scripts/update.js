(async () => {
  // read all folders from root except _scripts
  const util = require('util');
  const fs = require('fs');
  const path = require('path');
  const exec = util.promisify(require('child_process').exec);

  const root = path.join(__dirname, '..');
  const disallowList = [
    '_scripts', 
    '.git', 
    '.vscode', 
    '.cache',
  ]
  const folders = fs.readdirSync(root)
    .filter(f => !disallowList.find(filter => filter === f))
    .filter(f => fs.lstatSync(f).isDirectory());

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  await sleep(200)

  const upgradeStorybook = async (folder) => {
    console.log(`🏃‍♂️ Running ${folder}`);
    const { stdout } = await exec('npx storybook@future upgrade --prerelease --yes', { cwd: path.join(root, folder), shell: true });
    console.log(`✅ Done with ${folder}`);

    if (process.env.DEBUG) {
      console.log(`${folder}:\n`, stdout);
    }
  }

  // add a subset of folders instead, if you prefer
  const only = []

  const foldersToUpdate = (only.length > 0 && only) || folders;

  for (const folder of foldersToUpdate) {
    await upgradeStorybook(folder);
    // necessary to allow Yarn to finish its thing in one project and get ready for another
    await sleep(5000);
  }

  console.log(`✅ Done with everything!`);
})()
