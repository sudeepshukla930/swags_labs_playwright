const { test} = require("@playwright/test");
const {loginPage} = require('../pageObjects/loginLocator');
const {productsPage} = require('../pageObjects/productsLocator');


test('login page', async ({page})=>{

    const login = new loginPage(page);
    const products = new productsPage(page);

    await login.goToLoginPage();

    await login.enterCredential();
    
    await login.loginButtonClicked();
   
   await login.assertLogin();

    

    
})