import { TextResource } from "./../dist/texts.d";

/**
 * Text Resource Manager
 * @author Silind Software
 * @license MIT
 */
class TextResourceManager {
  private textObject: TextResource;

  /**
   * Instantiate TextResourceManager by providing the text object
   * @param textObject json-file og JavaScript object
   */
  constructor(textObject: object) {
    this.textObject = textObject as TextResource;
  }

  public get text() {
    return this.textObject;
  }
}

export default TextResourceManager;
