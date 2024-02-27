import { expect, type Locator, type Page } from '@playwright/test';

import {base} from '../data/data.json';

export class checkoutStepOnePage{

    private  readonly page: Page;
    private readonly firstnameLocator: Locator;
    private readonly lastnameLocator: Locator;
    private readonly zipLocator: Locator;
    private readonly continueButtonLocator : Locator;
    private readonly cancelButtonLocator : Locator;

   
   
    

    constructor(page: Page){

        this.page = page;
        this.firstnameLocator = page.getByPlaceholder('First Name');
        this.lastnameLocator = page.getByPlaceholder('Last Name');
        this.zipLocator = page.getByPlaceholder('Zip/Postal Code');
        this.continueButtonLocator = page.locator('input.btn_primary.cart_button');
        this.cancelButtonLocator = page.getByText('CANCEL', { exact: true} );


    }

    
    public async fillCheckoutDetails(firstName : string , lastName : string , zip : string){
        
        await this.firstnameLocator.fill(firstName);
        await this.lastnameLocator.fill(lastName);
        await this.zipLocator.fill(zip);
    }

    public async clickContinueButton(){

        await this.continueButtonLocator.click();
        await expect(await this.page.url()).toContain('checkout-step-two');

    }

    public async clickCancelOneButton(){

        await this.cancelButtonLocator.click();
        await expect(await this.page.url()).toContain('cart');
    }
   
    

   

  
}

