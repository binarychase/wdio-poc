export class BasePage {
  constructor(protected selector: string) {}

  async waitForElement(selector: string = this.selector) {
    const element = await $(selector);
    await element.waitForDisplayed();
  }

  async tap(selector: string) {
    const element = await $(selector);
    await element.click();
  }

  async setValue(selector: string, value: string) {
    const element = await $(selector);
    await element.setValue(value);
  }

  async getText(selector: string) {
    const element = await $(selector);
    return await element.getText();
  }

  async openApp() {
    await driver.launchApp();
  }

  async isVisible(selector: string) {
    const element = await $(selector);
    return element.isDisplayed();
  }

  async waitForVisibility(selector: string, timeout = 10000): Promise<boolean> {
    const element = await $(selector);
    try {
      await element.waitForDisplayed({ timeout });
      return true;
    } catch (error) {
      return false;
    }
  }
}