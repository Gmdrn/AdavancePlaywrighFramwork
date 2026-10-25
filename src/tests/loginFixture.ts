import {test as base,Page} from '@playwright/test';

type loginFixture={

    loginPage:Page
};


export const test=base.extend<loginFixture>({
    loginPage:async ({page},use)=>{
await page.goto('https://www.awesomeqa.com/login');
await use(page);
    }
});


export {expect} from '@playwright/test'; 