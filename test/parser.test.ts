import { parseJsonObject, interfaceNameConverter } from "../src/parser";
import Constants from "../src/constants.enum";

describe('parseJsonObject', () => {
  const strings = require('./test.json');
  const parsed = parseJsonObject(strings, 'RootObject') as any;

  it('should parse json object correctly #1', () => {
    expect(parsed.title).toEqual('RootObject');
  });

  it('should parse json object correctly #2', () => {
    expect(parsed.properties.buttons.type).toEqual(Constants.OBJECT);
  });

  it('should parse json object correctly #3', () => {
    expect(parsed.properties.landingPage.properties.welcomeMsg.description).toEqual('Hello, $1');
  });

  it('should parse json object correctly #4', () => {
    expect(parsed.properties.buttons.required.length).toBe(2);
  });

  it('should parse json object correctly #4', () => {
    expect(parsed.additionalProperties).toBeFalsy();
  });
});

describe('interfaceNameConverter', () => {
  it('should convert name correctly', () => {
    const name = 'someName';
    const interfaced = interfaceNameConverter(name);
    expect(interfaced).toEqual('SomeName');
  });
});
