import { BasePage } from '../base.page.ts';

class OnboardingPage extends BasePage {

  private get headerLbl() {
    return 'android=new UiSelector().resourceIdMatches(".*id/main_title")';
  }

  private get carouselThirdDotLbl() {
    return 'android=new UiSelector().resourceIdMatches(".*id/spring_dot").instance(3)'; // todo iOS selector
  }

  private get acceptCookiesBtn() {
    return 'android=new UiSelector().resourceIdMatches(".*id/btn_accept_cookies")'; // todo iOS selector
  }

  private get loginWithCredentialsBtn() {
    return 'android=new UiSelector().resourceIdMatches(".*id/login_with_creds")'; // todo iOS selector
  }

  private get agreePrivacyPolicyBtn() {
    return 'android=new UiSelector().resourceIdMatches(".*id/button1")'; // todo iOS selector
  }

  constructor() {
    super('android=new UiSelector().resourceIdMatches(".*id/pager")');
  }

  async isWelcomeMessageVisible() {
    return this.isVisible(this.headerLbl);
  }

  async openLoginPage() {
    await this.tap(this.carouselThirdDotLbl);
    if (await this.waitForVisibility(this.acceptCookiesBtn, 2000)) {
      await this.tap(this.acceptCookiesBtn);
    }
    await this.tap(this.loginWithCredentialsBtn);
    if (await this.waitForVisibility(this.agreePrivacyPolicyBtn, 2000)) {
      await this.tap(this.agreePrivacyPolicyBtn);
    }
  }

}

export const onboardingPage = new OnboardingPage();
