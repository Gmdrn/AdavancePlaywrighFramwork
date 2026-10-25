/** This is UtilElementLocater-contains all the util we can reuse directly in the project.
 * 
 *  **/

import { Locator, Page } from '@playwright/test';
import {createLogger, type Logger} from './logger';

export const DEFAULT_ACTION_TIMEOUT_MS = 15_000;
export type Flex =string |Locator

export class UtilElementLocater {

private readonly page:Page;
private readonly log:Logger;

// Initialization
constructor(page: Page, log: Logger = createLogger('UtilElementLocater')) {
	this.page = page;
	this.log = log;
}

private describe(target:Flex):string{
	return typeof target==='string'?target:target.toString();
}

private logAction(action:string,target:Flex):void{
	this.log.debug(`${action}: ${this.describe(target)}`);
}

// Locator
 private toLocator(target:Flex): Locator{
return typeof target==='string'? this.page.locator(target):target;
 }

// Actions
 async click(target:Flex,timeout:number=DEFAULT_ACTION_TIMEOUT_MS): Promise<void> {
this.logAction('click',target);
const loc =this.toLocator(target);
await loc.click({timeout});
 }  
  
 async doubleClick(target:Flex,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<void>{
this.logAction('double click',target);
const loc=this.toLocator(target);
await loc.dblclick({timeout});
 }

 async rihgtClick(target:Flex,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<void>{
this.logAction('right click',target);
const loc=this.toLocator(target);
await loc.click({button:'right',timeout});
 }


 async hover(target:Flex,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<void>{
this.logAction('hover',target);
const loc=this.toLocator(target);
 await loc.hover({timeout});
 }

 async fill(target:Flex,value:string,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<void>{
this.logAction('fill',target);
const loc=this.toLocator(target);
await loc.fill(value,{timeout});
 }
async type(target:Flex,value:string,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<void>{
this.logAction('type',target);
//Note:Playwright depricated .type() in favour of .pressSequentially() .
//we keep same name so API reads naturally for 

    const loc=this.toLocator(target);
await loc.pressSequentially(value,{timeout});
}

async clear(target:Flex,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<void>{
this.logAction('clear',target);
const loc=this.toLocator(target);
await loc.clear({timeout});

}

// Read
async getText(target:Flex,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<string>{
const loc=this.toLocator(target);
const text=await loc.textContent()?? '';
return text.trim();
}
async getInnerText (target:Flex,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<string>{
const loc=this.toLocator(target);
return (await loc.innerText()).trim();
}

async getAllText(target:Flex):Promise<string[]>{
const loc=this.toLocator(target);
return (await loc.allInnerTexts()).map(text=>text.trim());
}

async getAttr(target:Flex,attribute:string):Promise<string|null>{
const loc=this.toLocator(target);
return loc.getAttribute(attribute);
}

async getValue(target:Flex):Promise<string>{
const loc=this.toLocator(target);
return loc.inputValue();
}

async count(target:Flex):Promise<number>{
const loc=this.toLocator(target);
return loc.count();
}

// State
async isVisible(target:Flex):Promise<boolean>{
const loc=this.toLocator(target);
return loc.isVisible();
}

async isEnabled(target:Flex):Promise<boolean>{
const loc=this.toLocator(target);
return loc.isEnabled();
}

async isChecked(target:Flex):Promise<boolean>{
const loc=this.toLocator(target);
return loc.isChecked();
}

// Waits
async waitForVisible(target:Flex,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<void>{
this.logAction('wait for visible',target);
const loc=this.toLocator(target);
await loc.waitFor({state:'visible',timeout});
}

async waitForHidden(target:Flex,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<void>{
this.logAction('wait for hidden',target);
const loc=this.toLocator(target);
await loc.waitFor({state:'hidden',timeout});
}

async waitForPageLoad(timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<void>{
this.log.debug('Waiting for page load');
await this.page.waitForLoadState('load',{timeout});
}

// Select
async selectByText(target:Flex,text:string,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<string[]>{
this.logAction('select by text',target);
const loc=this.toLocator(target);
return loc.selectOption({label:text},{timeout});
}

async selectByValue(target:Flex,value:string,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<string[]>{
this.logAction('select by value',target);
const loc=this.toLocator(target);
return loc.selectOption(value,{timeout});
}

async selectByIndex(target:Flex,index:number,timeout:number=DEFAULT_ACTION_TIMEOUT_MS):Promise<string[]>{
this.logAction('select by index',target);
const loc=this.toLocator(target);
return loc.selectOption({index},{timeout});
}

}