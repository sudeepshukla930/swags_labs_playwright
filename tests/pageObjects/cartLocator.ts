import { expect, type Locator, type Page } from '@playwright/test';

import {base} from '../data/data.json';

export class cartPage{

    private  readonly page: Page;
    private readonly shopCartIconLocator: Locator;
    private removeFromCartLocator : Locator;
    private validateCountLocator : Locator;
    private checkoutButtonLocator : Locator;
    private readonly continueShopButtonLocator : Locator ;
    

    constructor(page: Page){

        this.page = page;
        this.shopCartIconLocator = page.locator('a.shopping_cart_link.fa-layers.fa-fw');
        this.removeFromCartLocator = page.locator('');
        this.validateCountLocator = page.locator('span.fa-layers-counter.shopping_cart_badge');
        this.checkoutButtonLocator = page.locator('a.btn_action.checkout_button');
        this.continueShopButtonLocator = page.getByText('Continue Shopping' , { exact: true});

    }


    private async setAddToCartButton(price:string){

        const regexPattern = new RegExp(`^${price.replace(/\./g, '\\.')}REMOVE$`);

        this.removeFromCartLocator =  this.page.locator('div').filter({ hasText: regexPattern }).getByRole('button');
    }
    
    public async clickCartIcon(){

       await this.shopCartIconLocator.click();
       await this.page.waitForURL('https://www.saucedemo.com/v1/cart.html');
       await expect(await this.page.url()).toContain('cart');
    }

    public async removeFromToCart(item:'sauce-labs-bike-light' | 'Sauce Labs Backpack' | 'sauce-labs-bolt-t-shirt' | 'Sauce Labs Fleece Jacket' | 'Sauce Labs Onesie' ,  price:string){
    
        await this.setAddToCartButton(price);

        await this.removeFromCartLocator.click();

        console.log(await this.validateCountLocator.innerText());

    
   }

   public async clickCheckoutButton(){

        await this.checkoutButtonLocator.click();
        await expect(await this.page.url()).toContain('checkout-step-one');
   }

   public async clickContinueShopButton(){

        await this.continueShopButtonLocator.click();
   }



   

}

