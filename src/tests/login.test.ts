import { onboardingPage } from '../pages/onboarding/onboarding.page.ts';
import { errorPage } from '../pages/error.page.ts';
import { loginPage } from '../pages/onboarding/login.page.ts';
import { UserManager } from '../managers/user.manager.ts';

describe('Login Tests', () => {
  it('should allow the user to login successfully', async () => {
    await onboardingPage.openLoginPage();
    await errorPage.closeError();
    await loginPage.chooseUat1Env();
    const userManager = new UserManager();
    const user = userManager.getFirstUser();

    await loginPage.login(user.username, user.password);
    await new Promise(resolve => setTimeout(resolve, 600000));
  });
});
