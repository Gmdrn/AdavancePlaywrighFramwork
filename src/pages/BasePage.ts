import {Page} from '@playwright/test';
import {UtilElementLocater} from '../utils/UtilElementLocater';
import {createLogger, type Logger} from '../utils/logger';


export abstract class BasePage{

protected readonly page:Page;
protected readonly el:UtilElementLocater;
protected readonly scope:string;
protected readonly log:Logger;
protected constructor(page:Page ,scope:string){
this.page=page;
this.scope=scope;
this.log=createLogger(scope);
this.el=new UtilElementLocater(page,createLogger(`${scope}.UtilElementLocater`));

}
protected async goto (relativePath:string,): Promise<void>{
this.log.info(`Navigating to page: ${relativePath}`);
await this.page.goto(relativePath);
await this.page.waitForLoadState('load');
this.log.info(`Page loaded: ${relativePath}`);


}

}