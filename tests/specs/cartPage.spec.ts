
import { test,  Page , expect} from '@playwright/test';
import { productsPage } from '../pageObjects/productsLocator';
import {loginPage} from '../pageObjects/loginLocator';
import { cartPage } from '../pageObjects/cartLocator';
import { checkoutStepOnePage } from '../pageObjects/checkoutStepOneLocators';
import { checkoutSteptwoPage } from '../pageObjects/checkoutStepTwoLocators';


test.describe('Cart page', () => {
  let page: Page;
  let login : loginPage
  let products : productsPage
  let cart : cartPage
  let checkoutOne : checkoutStepOnePage
  let chheckoutTwo : checkoutSteptwoPage

  let count : number

  test.beforeEach(async ({page}) => {
    
    login = new loginPage(page);
    products = new productsPage(page);
    cart = new cartPage(page);
    checkoutOne = new checkoutStepOnePage(page);
    chheckoutTwo = new checkoutSteptwoPage(page);


    await login.goToLoginPage();

    await login.enterCredential();
    
    await login.loginButtonClicked();
   
   await login.assertLogin();

  });

  

  

  test(`check till checkout functionality `, async ({page}) => {
    // Test code goes here
    count = 0;
    await products.addItemToCart('Sauce Labs Onesie','$7.99');
    count++ ;

    await products.addItemToCart('Sauce Labs Fleece Jacket','$49.99');
    count++ ; 

    await products.addItemToCart('Sauce Labs Backpack', '$29.99');
    count++ ; 

    await products.validateAddToCartCount(count.toString());

    await cart.clickCartIcon();

    await cart.removeFromToCart('Sauce Labs Onesie','7.99');

    await cart.clickCheckoutButton();

    await checkoutOne.fillCheckoutDetails('ss','ss','222222');

    await checkoutOne.clickContinueButton();

    await chheckoutTwo.clickFinisheButton();





  });


  
});




