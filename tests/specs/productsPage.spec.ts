
import { test,  Page , expect} from '@playwright/test';
import { productsPage } from '../pageObjects/productsLocator';
import {loginPage} from '../pageObjects/loginLocator';


test.describe('Products page', () => {
  let page: Page;
  let products : productsPage

  test.beforeEach(async ({page}) => {
    
    const login = new loginPage(page);
    products = new productsPage(page);

    await login.goToLoginPage();

    await login.enterCredential();
    
    await login.loginButtonClicked();
   
   await login.assertLogin();

  });

  

  test(`Menu bar all links navigation `, async ({page}) => {
    // Test code goes here
    
    await products.clickMenuBarOpen();

    await products.clickYourMenuElement('about');

    await page.goBack();

    await products.clickMenuBarOpen();

    await products.clickYourMenuElement('all items');

    await products.clickMenuBarOpen();

    await products.clickYourMenuElement('logout');



  });


  test(`Add product to cart in products page `, async ({page}) => {
    // Test code goes here
    let count:number = 0;
    await products.addItemToCart('Sauce Labs Onesie','$7.99');
    count++ ;

    await products.addItemToCart('Sauce Labs Fleece Jacket','$49.99');
    count++ ; 

    await products.addItemToCart('Sauce Labs Backpack', '$29.99');
    count++ ; 

    await products.validateAddToCartCount(count.toString());


  });
});




