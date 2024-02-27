import { expect, type Locator, type Page } from '@playwright/test';


export class checkoutSteptwoPage{

    private  readonly page: Page;

    private readonly cancelButtonLocator : Locator;
    private readonly finishButtonLocator : Locator;


   
    constructor(page: Page){

        this.page = page;
        this.cancelButtonLocator = page.getByText('CANCEL', { exact: true} );
        this.finishButtonLocator = page.getByText('FINISH', { exact: true} );

    }

    
    
    public async clickFinisheButton(){

        await this.finishButtonLocator.click();
        await expect(await this.page.url()).toContain('checkout-complete');

    }

    public async clickCancelTwoButton(){

        await this.cancelButtonLocator.click();
    }

   
    

   

  
}

