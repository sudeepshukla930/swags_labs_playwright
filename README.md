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
- **loginLocator.ts**: This page object handles the login functionality of the OrangeHRM site. It encapsulates locators, data loading from JSON files, login actions, and assertions for login success or failure.
- **productsLocator.ts**: This file defines the Page Object class for the product page of the SauceDemo website. It encapsulates methods and locators related to product listing, filtering, sorting, and adding products to the cart.
- **cartLocator.ts**: This file defines the Page Object class for the cart page of the SauceDemo website. It encapsulates methods and locators related to managing items in the cart, such as adding, removing, updating quantities, and proceeding to checkout.

- **checkoutStepOneLocators.ts**: This file defines the Page Object class for the first step of the checkout process in the SauceDemo website. It encapsulates methods and locators related to filling out shipping and personal information on the checkout page.

- **checkoutStepTwoLocators.ts**: This file defines the Page Object class for the second step of the checkout process in the SauceDemo website. It encapsulates methods and locators related to reviewing order details and completing the checkout process.

****
### 🧰 Utilities
- **commonTestMethods.ts**: Defines a static variable for storing the username globally, ensuring its accessibility across different parts of the framework.
- **excelRead.ts**: Fetches the current page's username and stores it into the Global class's username variable, facilitating dynamic data handling and reuse.
***

### 🔨 Tests
- **loginPageTest.spec.ts**: Contains test cases related to the login page functionality, ensuring successful login with valid credentials and handling login failures.
- **dashboardPageTest.spec.ts**: Tests for the dashboard page interactions, verifying the functionality of dashboard links and navigation.
- **timesheetPageTest.spec.ts**: Tests for the timesheet functionality, including dynamic navigation and interactions with timesheet entries.
- **leavePageTest.spec.ts**: Test cases for leave management functionality, covering leave list, leave assignment, and entitlement adding functionalities.
***

### 🎬 Project Flow
1. **Login**: Tests begin by logging into the OrangeHRM site using credentials loaded from a JSON file. This ensures that the test environment is properly set up before executing further tests.
2. **Dashboard Navigation**: After successful login, the dashboard page is visited, and its links are tested to ensure proper functionality and navigation.
3. **Timesheet Interaction**: Tests are conducted to dynamically navigate to the timesheet section and interact with it, verifying the addition and viewing of timesheet entries.
4. **Leave Management**: Test cases are executed for leave management functionality, including leave list verification, leave assignment, and adding entitlements.
***

## 💻 Technologies Used
- **🎭 Playwright**: Automation library for web applications. 
- **![JavaScript Icon](https://img.icons8.com/color/24/000000/javascript--v1.png) JavaScript**: Programming language used for scripting. 
- **![Ts Icon](https://img.icons8.com/color/24/000000/typescript--v1.png) Typescript** : Markup language for creating web pages. 
- **![Allure Icon](https://img.icons8.com/ios/18/000000/test-tube.png) Allure Report**: Test report generation tool. 

***

### ⏩ Execution
To execute the tests:
1. Open a terminal or command prompt.
2. Navigate to the root directory of the project.
3. Run the following command:
   ```
    npx playwright test
   ```
   This command triggers the execution of test scripts using Playwright.

***
### 🌟 Reports
- **HTML Reports**: Upon test execution, HTML reports are generated in the `test-results` directory. These reports provide a detailed summary of test outcomes, including pass/fail status and any associated errors.
- **Allure Reports**: Allure reports can be generated and viewed using Allure Command Line. Follow these steps:
  1. Ensure that you have Allure Command Line installed on your system.
  2. Navigate to the `test-results` directory in your terminal.
  3. Run the command:
     ```
     allure serve
     ```
     This command starts a local server and opens the Allure report in your default web browser.

*******************************
********************


   **<h2 align="center"> Contributed by <a href="https://github.com/sudeepshukla930">Sudeep Shukla</a> With 💜. </h2>**





 