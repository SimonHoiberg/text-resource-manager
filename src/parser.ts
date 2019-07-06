import Constants from "./constants.enum";

export function interfaceNameConverter(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export function parseJsonObject(object: object, title: string): any {
  let properties = {};

  Object.entries(object).forEach(([key, val]) => {
    if (typeof val === Constants.OBJECT) {
      properties = {...properties, [key]: parseJsonObject(val, interfaceNameConverter(key))}
    }
    else if (typeof val === Constants.STRING) {
      properties = {...properties, [key]: {
        type: Constants.STRING,
        description: val,
      }}
    }
    else {
      throw Error(
      `
        Invalid json file provided.
        A value cannot be of type: ${typeof val}
      `);
    }
  });
  
  return {
    title,
    type: Constants.OBJECT,
    additionalProperties: (title === Constants.MAIN_TITLE),
    properties,
    required: Object.keys(properties),
  }
}
