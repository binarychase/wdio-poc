import { BasePage } from '../base.page.ts';

class LoginPage extends BasePage {

  private get usernameLbl() {
    return 'android=new UiSelector().resourceIdMatches(".*id/homeUsernameEditText")';
  }

  private get passwordLbl() {
    return 'android=new UiSelector().resourceIdMatches(".*id/homePasswordEditText")';
  }

  private get logInBtn() {
    return 'android=new UiSelector().resourceIdMatches(".*id/loginButton")';
  }

  private get envSelector() {
    return 'android=new UiSelector().resourceIdMatches(".*id/services_url_spinner")';
  }

  private get envSelectorLbl() {
    return 'android=new UiSelector().resourceIdMatches(".*id/services_url_spinner").childSelector(new UiSelector().className("android.widget.TextView"))';
  }

  private get envOptionList() {
    return 'android=new UiSelector().resourceIdMatches(".*id/text1")'; 
  }

  private get changeLanguageBtn() {
    return 'android=new UiSelector().resourceIdMatches(".*id/homeChangeLanguageButton")'; 
  }

  constructor() {
    super('android=new UiSelector().resourceIdMatches(".*id/base_ll")');
  }

  async login(username: string, password: string) {
    await this.setValue(this.usernameLbl, username);
    await this.setValue(this.passwordLbl, password);
    await this.tap(this.logInBtn);
  }

  async chooseUat1Env() {
    const currentEnv = await $(this.envSelectorLbl).getText();
    const envText = 'TEST UAT1';
    if (currentEnv !== envText) {
      await this.tap(this.envSelector);
      await this.selectEnvironment(envText);

    }
  }

  async selectEnvironment(env: string) {
    const envOptions = await $$(this.envOptionList);
    for (const option of envOptions) {
      const text = await option.getText();
      if (text === env) {
        await option.click();
        break;
      }
    }
  }

  async tapChangeLanguageBtn() {
    await this.tap(this.changeLanguageBtn);
  }

}

export const loginPage = new LoginPage();
