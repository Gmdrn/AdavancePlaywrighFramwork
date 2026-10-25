import {expect,test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {createLogger} from '../utils/logger';

test.describe('TTA-cart Login Tests',()=>{
    let loginPage:LoginPage;
    const log = createLogger('LoginSpec');
    
test.beforeEach(async ({page})=>
{loginPage=new LoginPage(page);
    await loginPage.open();
});
test ('log in with valid credentials @p0',async ({page})=>{
    await test.step('Login with valid credentials', async () => {
        log.info('Attempting login with valid credentials');
        await loginPage.loginAs('standard_user','tta_secret');
        log.info('Login attempt completed');
    });

    await test.step('Verify login success', async () => {
        log.info('Verifying the login form is hidden after successful sign-in');
        //after successful login the login form is gone
        await expect(page.locator('[data-test="login-button"]')).toBeHidden();
        log.info('Login verification passed');
    });
});
});
