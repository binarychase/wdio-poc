import { BasePage } from './base.page.ts';

class ErrorPage extends BasePage {

  private get headerLbl() {
    return 'android=new UiSelector().resourceIdMatches(".*id/alertTitle")';
  }

  private get primaryBtn() {
    return 'android=new UiSelector().resourceIdMatches(".*id/button1")';
  }

  constructor() {
    super('android=new UiSelector().resourceIdMatches(".*id/alertTitle")');
  }

async closeError() {
    if (await this.waitForVisibility(this.headerLbl, 2000)) {
      await this.tap(this.primaryBtn);
    }
  }
}

export const errorPage = new ErrorPage();
