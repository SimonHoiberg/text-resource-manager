import { compile } from 'json-schema-to-typescript'
import { writeFileSync, readFileSync } from 'fs';
import Constants from './constants.enum';
import { parseJsonObject } from './parser';

export function writeInterfaceFromObject(filePath: string) {
  const file = readFileSync(filePath, 'utf8');
  const object = JSON.parse(file);

  const parsedSchema = parseJsonObject(object, Constants.MAIN_TITLE);
  compile(parsedSchema, 'ITextResource')
    .then(ts => {
      writeFileSync(__dirname + '/texts.d.ts', ts)
    });
}

export function getFullFilePath(moduleRoot: string, relativeFilePath: string) {
  const modulePath = moduleRoot;
    let filePath = relativeFilePath;

    if (filePath.substring(0,1) === '/') {
      filePath = filePath.substring(1);
    }

    if (filePath.substring(0, 2) === './') {
      filePath = filePath.substring(2);
    }

    const modulePathArray = modulePath.split('/');
    modulePathArray.length = modulePathArray.length - 3;

    const rootProjectPath = modulePathArray.join('/');
    return rootProjectPath + '/' + filePath;
}