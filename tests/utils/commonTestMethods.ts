
import { test, Page, expect } from '@playwright/test';
import { productsPage } from '../pageObjects/productsLocator';
import { loginPage } from '../pageObjects/loginLocator';
import { cartPage } from '../pageObjects/cartLocator';
import { checkoutStepOnePage } from '../pageObjects/checkoutStepOneLocators';
import { checkoutSteptwoPage } from '../pageObjects/checkoutStepTwoLocators';
import {userExcel} from '../data/data.json';
import { ExcelReader } from '../utils/excelRead';


export class CommonMethods {

    static async addItemsToCart(page: Page, products: productsPage, items: { name: string; price: string }[]) {
        let count = 0;
        for (const item of items) {
            await products.addItemToCart(item.name, item.price);
            count++;
        }
        await products.validateAddToCartCount(count.toString());
    }

    static async proceedToCheckoutAndFinish(
        page: Page,
        cart: cartPage,
        checkoutOne: checkoutStepOnePage,
        chheckoutTwo: checkoutSteptwoPage,
        excelData: any[][]
    ) {
        await cart.clickCartIcon();
        await cart.clickCheckoutButton();
        await checkoutOne.fillCheckoutDetails(excelData[1][0], excelData[1][1], excelData[1][2].toString());
        await checkoutOne.clickContinueButton();
        await chheckoutTwo.clickFinisheButton();
    }

}