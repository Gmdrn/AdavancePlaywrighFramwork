import {expect,Page,Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class LoginPage extends BasePage{

    static readonly PATH ='https://app.thetestingacademy.com/playwright/ttacart/index.html';

private readonly usernameInput: Locator;
private readonly passwordInput: Locator;
private readonly loginButton: Locator;
private readonly errorBox :Locator;
private readonly loginCredentialsHint: Locator;


constructor (page:Page){
super (page, 'LoginPage');
this.usernameInput=page.locator('[data-test="username"]');
this.passwordInput=page.locator('[data-test="password"]');
this.loginButton=page.locator('[data-test="login-button"]');
this.errorBox=page.locator('[data-test="error"]');
this.loginCredentialsHint=page.locator('[data-test="login-credentials-hint"]');
}

async open(): Promise<void>{
    await this.goto(LoginPage.PATH);
}
async loginAs(username:string,password:string): Promise<void>{
    this.log.info(`Logging in as ${username}`);
    await this.el.fill(this.usernameInput,username);
    await this.el.fill(this.passwordInput,password);
    await this.el.click(this.loginButton);
} 







}