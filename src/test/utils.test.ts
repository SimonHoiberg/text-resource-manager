import { getFullFilePath } from "../utils";

describe('getFullFilePath', () => {
  const modulePath = '/home/user/Documents/Projects/someProject/node_modules/text-resource-manager/dist';

  it('should give correct file path given relative', () => {
    const relativePath = 'src/strings.json';
    const fullPath = getFullFilePath(modulePath, relativePath);
    expect(fullPath).toEqual('/home/user/Documents/Projects/someProject/src/strings.json');
  });

  it('should give correct file path given relative ./', () => {
    const relativePath = './src/strings.json';
    const fullPath = getFullFilePath(modulePath, relativePath);
    expect(fullPath).toEqual('/home/user/Documents/Projects/someProject/src/strings.json');
  });

  it('should give correct file path given relative /', () => {
    const relativePath = '/src/strings.json';
    const fullPath = getFullFilePath(modulePath, relativePath);
    expect(fullPath).toEqual('/home/user/Documents/Projects/someProject/src/strings.json');
  });
});
