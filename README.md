# My Demo App by Sauce Labs Automation Testing

## Overview

This repository contains automated tests for the **My Demo App** using Appium and WebdriverIO. The focus is on testing key features such as login functionality, product reviews, product color changes, and cart operations.

## Features

- **Login Functionality**: Tests for valid and invalid login attempts.
- **Product Reviews**: Ability to leave 1-star and 5-star reviews on products.
- **Product Color Change**: Verifies the functionality of changing product colors on the detail page.
- **Cart Operations**: Tests for adding products to the cart, adjusting product quantity, and verifying cart messages.

## Test Cases
### Login Feature
- Login with empty password: Verify error message.
- Login with empty username: Verify error message.
- Login with valid credentials: Verify successful login.
### Product Review Feature
- Check 1-Star review: Verify successful submission.
- Check 5-Star review: Verify successful submission.
### Product Color Change
- Check first color option: Verify functionality.
- Check last color option: Verify functionality.
### Cart Functionality
- Add to Cart: Verify success message.
- Adjust Quantity: Verify increase and decrease functionality.

## Prerequisites

- Node.js
- Appium
- Appium Inspector: Used for inspecting UI elements and obtaining element locators (IDs, classes, etc.) from the app.
- Android Studio 
- WebdriverIO
- Java Development Kit (JDK)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-demo-app-android-appium-test.git
   cd my-demo-app-android-appium-test
2. Install the dependencies:
   ```bash
   npm install
3. Start Appium server:
   ```bash
   appium
4. Open Appium Inspector to inspect the app and obtain element locators.

## Running Tests
   To run the tests for spesific feature, execute the following command:
   ```
   npx wdio run wdio.conf.js --spec ./test/specs/file-name.spec.js
   ```
   Example, if you want to run login feature :
   ```
   npx wdio run wdio.conf.js --spec ./test/specs/login.spec.js
   ```
Feel free to ask if you need further modifications or additions!

