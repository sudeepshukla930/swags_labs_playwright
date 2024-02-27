import { expect, type Locator, type Page } from '@playwright/test';

import {base} from '../data/data.json';

export class productsPage{

    private  readonly page: Page;
    private readonly menuBarOpenLocator:Locator;
    private readonly menuBarCloseLocator:Locator;
    private  menuSelectLocator:Locator;
    private  AddToCartLocator:Locator;
    private  validateCountLocator : Locator;
   
    

    constructor(page: Page){

        this.page = page;
        this.menuBarOpenLocator = page.getByRole('button',{name:'Open Menu'});
        this.menuBarCloseLocator = page.getByRole('button',{name:'Close Menu'});
        this.menuSelectLocator = page.locator('');
        this.AddToCartLocator = page.locator('');
        this.validateCountLocator = page.locator('span.fa-layers-counter.shopping_cart_badge');


    }

    
    private async setMenuElement(name:string){
        this.menuSelectLocator = this.page.locator(`#${name}_sidebar_link`);
    }

    private async setAddToCartButton(price:string){

        const regexPattern = new RegExp(`^\\${price.replace(/\./g, '\\.')}ADD TO CART$`);

        this.AddToCartLocator =  this.page.locator('div').filter({ hasText: regexPattern }).getByRole('button');
    }
    

    public async clickMenuBarOpen(){
        
        await this.menuBarOpenLocator.waitFor();
        await this.menuBarOpenLocator.click();
        // await expect(this.page.getByText('All ItemsAboutLogoutReset App State')).toBeVisible();
        
    }

    public async clickYourMenuElement(name:string){
        
         let menuName = ( (name === 'all items') ? 'inventory' : name) ;

        await this.setMenuElement(menuName);
        await this.menuSelectLocator.waitFor();
        await this.menuSelectLocator.click();

        let urlElement  = ((menuName === 'inventory') ? 'inventory' :((menuName === 'about') ? 'saucelabs':'index'));

        await this.validateMenuElementClicked(urlElement);

        
    }

   
    private async validateMenuElementClicked(name:string){
        await expect(this.page.url()).toContain(name);
    }

    public async addItemToCart(item:'sauce-labs-bike-light' | 'Sauce Labs Backpack' | 'sauce-labs-bolt-t-shirt' | 'Sauce Labs Fleece Jacket' | 'Sauce Labs Onesie' ,  price:string){
    
            await this.setAddToCartButton(price);

            await this.AddToCartLocator.click();

        
       }

    public async validateAddToCartCount(count:string){
        
        await expect.soft(await this.validateCountLocator.innerText()).toBe(count);
    }


     

}

