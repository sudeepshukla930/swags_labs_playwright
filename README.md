 ![swagLabs](https://www.pagerduty.com/wp-content/uploads/2020/01/010101_LOGO_Sauce-Labs_Horiz_Red-Grey_RGB.png)

## Sauce Labs Test Automation Framework


![image](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=Playwright&logoColor=yellow)    ![js](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
)   ![ts](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
)  ![pom](https://img.shields.io/badge/POM-48B9C7?style=for-the-badge&logo=pkgsrc&logoColor=white)

### 🤖 Overview
This test automation framework is developed using Playwright to automate testing of the Sauce Labs site. It adopts the Page Object Model (POM) pattern to enhance code organization and maintenance, ensuring scalability and reusability of test scripts. The framework integrates HTML , logger and Allure reports to provide comprehensive insights into test execution results, facilitating effective debugging and analysis.It also have nyc code coverage
***
### 📁 Folder Structure
```
 tests/

   data/
     data.json
     userData.xlsx

    pageObjects/
      cartLocator.ts
      checkoutStepOneLocators.ts
      checkoutStepTwoLocators.ts
      loginLocator.ts
      productsLocator.ts
    
    specs/
      loginPage.spec.ts
      cartPage.spec.ts
      productsPage.spec.ts
      endToEndTest.spec.ts

    utils/
        commonTestMethods.ts
        excelRead.ts
```

***
### 📜 Pages
- **loginLocator.ts**: This page object handles the login functionality of the site. It encapsulates locators, data loading from JSON files, login actions, and assertions for login success or failure.
- **productsLocator.ts**: This file defines the Page Object class for the product page of the SauceDemo website. It encapsulates methods and locators related to product listing, filtering, sorting, and adding products to the cart.
- **cartLocator.ts**: This file defines the Page Object class for the cart page of the SauceDemo website. It encapsulates methods and locators related to managing items in the cart, such as adding, removing, updating quantities, and proceeding to checkout.

- **checkoutStepOneLocators.ts**: This file defines the Page Object class for the first step of the checkout process in the SauceDemo website. It encapsulates methods and locators related to filling out shipping and personal information on the checkout page.

- **checkoutStepTwoLocators.ts**: This file defines the Page Object class for the second step of the checkout process in the SauceDemo website. It encapsulates methods and locators related to reviewing order details and completing the checkout process.

****
### 🧰 Utilities
- **commonTestMethods.ts**: This file contains common utility functions that are reused across multiple test scripts.

- **excelRead.ts**: This file contains utility functions for reading data from Excel files. It provides functions to parse Excel files and extract data for use in test scripts, facilitating data-driven testing.
***

### 🔨 Tests
- **loginPage.spec.ts**: Contains test cases related to the login page functionality, ensuring successful login with valid credentials and handling login failures.

- **productsPageTest.spec.ts**: his file contains test scripts related to the product page functionality of the SauceDemo website. It includes test cases to verify product listings, sorting, filtering, adding products to the cart, and any related scenarios.

- **cartPage.spec.ts**: This file contains test scripts related to the cart functionality of the SauceDemo website. It includes test cases to verify adding and removing items from the cart, updating quantities, checkout process, and any related scenarios.

- **endToEndTest.spec.ts**: This file contains end-to-end test scenarios that cover multiple functionalities of the SauceDemo website. It includes test cases that simulate user interactions across different pages, such as login, product selection, cart management, and checkout.
***



## 💻 Technologies Used
- **🎭 Playwright**: Automation library for web applications. 
- **![JavaScript Icon](https://img.icons8.com/color/24/000000/javascript--v1.png) JavaScript**: Programming language used for scripting. 
- **![Ts Icon](https://img.icons8.com/color/24/000000/typescript--v1.png) Typescript** : Markup language for creating web pages. 
- **![Allure Icon](https://img.icons8.com/ios/18/000000/test-tube.png) Allure Report**: Test report generation tool. 

***

## ✔ Installation

```bash
   git clone https://github.com/sudeepshukla930/swags_labs_playwright/
```

install dependencies

```bash
   npm install
```

## 🚀 Usage

###  Running Tests

- **Login through Chrome:** 

```
npm run loginThroughChrome

```

- **Product page through Chrome:** 

```
npm run productThroughChrome

```
- **Cart page through Chrome:** 

```
npm run cartThroughChrome

```
- **Run all tests** 

```
npm run test

```


## 📈 Reports

- **HTML Report** 

```
npm run htmlReport

```

- **Allure Report** 

```
npm run allure

```

- **nyc generate** 

```
npm run test:coverage

```

***

## 📌 Keypoints:

- Tests are written using Playwright and TypeScript, providing a robust and maintainable test suite.

- Data-driven testing is implemented using JSON and Excel data files, allowing for flexibility and scalability in test data management.

- Page Object Model (POM) is followed for better code organization and maintainability, enhancing test readability and reusability.

- Detailed test reports are generated using Allure, providing comprehensive insights into test execution.

- Code coverage reports are generated using NYC and Istanbul, ensuring code quality and test coverage.

*******************************
********************


   **<h2 align="center"> Contributed by <a href="https://github.com/sudeepshukla930">Sudeep Shukla</a> With 💜. </h2>**





 