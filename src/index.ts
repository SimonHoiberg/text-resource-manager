import { watchFile } from 'fs';
import { writeInterfaceFromObject, getFullFilePath } from './utils';
import TextResourceManager from './TextResourceManager';

const usageText = `
  text-resource-manager:

  usage:
    -file <path>    :     the relative path of json-file. E.g. 'src/allTexts.json'
    -watch          :     watch the json-file for changes
`;

const args = process.argv;
if (args.length > 2) {
  const customArgs = args.slice(2);

  if (customArgs[1] === '-help' || customArgs[1] === '--h') {
    console.log(usageText);
    process.exit;
  }

  const fileArg = customArgs.findIndex((a: string) => a === '-file' || a === '--f');

  if (fileArg && customArgs.length <= fileArg) {
    console.log('<path> argument is missing.')
    console.log(usageText);
    process.exit;
  }

  const filePath = customArgs[fileArg + 1];

  if (!filePath.match(/(\.\/|\/)*([a-zA-Z0-9]+\/)*([a-zA-Z0-9])+.json/)) {
    console.log('<path> argument is invalid.')
    console.log(usageText);
    process.exit;
  }

  const fullFilePath = getFullFilePath(args[1], filePath);
  writeInterfaceFromObject(fullFilePath);

  const watch = customArgs.findIndex((a: string) => a === '-watch' || a === '--w');

  if (watch > -1) {
    watchFile(fullFilePath, () => {
      writeInterfaceFromObject(fullFilePath);
    });
  }
}

export default TextResourceManager;
