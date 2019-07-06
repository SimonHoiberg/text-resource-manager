import TextResourceManager from "../src";

describe('TextResourceManager instance', () => {
  const strings = require('./test.json');

  it('should instantiate correctly given json file', () => {
    const textManager = new TextResourceManager(strings);
    expect(textManager.text).toBeTruthy();
  });

  it('should instantiate correctly given javascript object', () => {
    const textObject = {
      buttons: {
        done: "Done, go to next",
        exit: "Go back"
      },
    }
    
    const textManager = new TextResourceManager(textObject);
    expect(textManager.text).toBeTruthy();
  });

  it('should return correctly formatted object given json file', () => {
    const textManager = new TextResourceManager(strings);
    expect(textManager.text.landingPage.menu.subMenu.saveAndLogout).toEqual('Save and Log Out');
  });
});
