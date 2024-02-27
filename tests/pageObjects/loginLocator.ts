import { expect, type Locator, type Page } from '@playwright/test';

import {base} from '../data/data.json';

export class loginPage{

    private  readonly page: Page;
    private readonly usernameLocator:Locator;
    private readonly passwordLocator:Locator;
    private readonly loginButtonLocator:Locator;
   
    

    constructor(page: Page){

        this.page = page;
        this.usernameLocator = page.getByPlaceholder('Username');
        this.passwordLocator = page.getByPlaceholder('Password');
        this.loginButtonLocator = page.locator('#login-button');

    }

    
    public async goToLoginPage(){
        console.log(base);
        await this.page.goto(base.url);
    }

    public async enterCredential(){
        
        await this.usernameLocator.waitFor();
        await this.usernameLocator.fill(base.username);

        await this.passwordLocator.waitFor();
        await this.passwordLocator.fill(base.password);
        
    }

    public async loginButtonClicked(){

        this.loginButtonLocator.waitFor();
        this.loginButtonLocator.click();
    }

   

    public async assertLogin(){

        await this.page.waitForURL('https://www.saucedemo.com/v1/inventory.html');
        await expect(this.page.url()).toContain('inventory');
        
    }

}

