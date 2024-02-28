import { test, Page, expect } from '@playwright/test';
import { productsPage } from '../pageObjects/productsLocator';
import { loginPage } from '../pageObjects/loginLocator';
import { cartPage } from '../pageObjects/cartLocator';
import { checkoutStepOnePage } from '../pageObjects/checkoutStepOneLocators';
import { checkoutSteptwoPage } from '../pageObjects/checkoutStepTwoLocators';
import {userExcel} from '../data/data.json';
import { ExcelReader } from '../utils/excelRead';
import { CommonMethods } from '../utils/commonTestMethods';
import { Logger } from '../utils/logger';



test.describe('End to End test ', () => {

    let page: Page;
    let login: loginPage
    let products: productsPage
    let cart: cartPage
    let checkoutOne: checkoutStepOnePage
    let chheckoutTwo: checkoutSteptwoPage
    let excelData : any[][] = [];
    let count : number;


    test.beforeAll(async ({ browser }) => {

        page = await browser.newPage();
        login = new loginPage(page);
        products = new productsPage(page);
        cart = new cartPage(page);
        checkoutOne = new checkoutStepOnePage(page);
        chheckoutTwo = new checkoutSteptwoPage(page);

        excelData = await ExcelReader.readExcel(userExcel.filePath , userExcel.sheetName);


        Logger.info("Login started..")
        
        await login.goToLoginPage();

        await login.enterCredential();

        await login.loginButtonClicked();

        await login.assertLogin();

        Logger.success("Login done")
    

    });


    /*
        Scenario - 1 :
        Standard user will login and enter to products page , select 2-3 items
        and add to cart dynamically (happens without loop) then it click on cart icon 
        verify number of items and then moves towards checkout , fills details and finish
    
    */ 

    test(`Scenario-1 : Standard user logined and perform checkout `, async ({page}) => {

        Logger.info("Scenario 1 started ")
        Logger.info("add items to cart ")

        await CommonMethods.addItemsToCart(page, products, [
            { name: 'Sauce Labs Onesie', price: '$7.99' },
            { name: 'Sauce Labs Fleece Jacket', price: '$49.99' },
            { name: 'Sauce Labs Backpack', price: '$29.99' }
        ]);
        
        Logger.success("add items to cart  done ")

        Logger.info("checkout process ")
        await CommonMethods.proceedToCheckoutAndFinish(page, cart, checkoutOne, chheckoutTwo, excelData);

        Logger.success("checkout done ")
        Logger.info("Scenario 1 finished")

      });

/*
        Scenario - 2 :
        Standard user will login and enter to products page , select 2-3 items
        and add to cart dynamically (happens without loop) then it click on cart icon 
        verify number of items then it will remove an item  and then moves towards checkout , fills details and finish
    
    */ 

     

      test(`Scenario-2 : Removed an item then proceed to checkout `, async ({page}) => {
        // Test code goes here
        await CommonMethods.addItemsToCart(page, products, [
            { name: 'Sauce Labs Onesie', price: '$7.99' },
            { name: 'Sauce Labs Fleece Jacket', price: '$49.99' },
            { name: 'Sauce Labs Backpack', price: '$29.99' }
        ]);
        await cart.clickCartIcon();
        await cart.removeFromToCart('Sauce Labs Onesie', '7.99');
        await CommonMethods.proceedToCheckoutAndFinish(page, cart, checkoutOne, chheckoutTwo, excelData);
    
    
    
      });
    


      /*
        Scenario - 3 :
        Standard user will login , it will click on menu bar then it click on 'all items' link dynamically 
        (without loop) , enter to products page , select 2-3 items
        and add to cart dynamically (happens without loop) then it click on cart icon 
        verify number of items  then moves towards checkout , fills details and finish
    
    */ 

     

        test(`Scenario-3 : User goes to menu bar , click 'all items' link then select and proceed till checkout `, async ({page}) => {


            // Test code goes here

            await products.clickMenuBarOpen();
            await products.clickYourMenuElement('all items');
            await CommonMethods.addItemsToCart(page, products, [
                { name: 'Sauce Labs Onesie', price: '$7.99' },
                { name: 'Sauce Labs Fleece Jacket', price: '$49.99' },
                { name: 'Sauce Labs Backpack', price: '$29.99' }
            ]);
            await cart.clickCartIcon();
            await cart.removeFromToCart('Sauce Labs Onesie', '7.99');
            await CommonMethods.proceedToCheckoutAndFinish(page, cart, checkoutOne, chheckoutTwo, excelData);
        
          });


          /*
        Scenario - 4 :
        Standard user will login and enter to products page ,  it click on cart icon 
         then moves towards checkout , cancel the checkout one page , comes to cart ,
         click on continue shopping and comes to home(products) page
    
    */ 

     

      test(`Scenario-4 : Proceed to checkout one page then cancel back and moves to products page `, async ({page}) => {
        // Test code goes here
       
    
        await cart.clickCartIcon();
    
        await cart.clickCheckoutButton();
    
        await checkoutOne.clickCancelOneButton();

        await cart.clickContinueShopButton();

    

    
      });



        


})
