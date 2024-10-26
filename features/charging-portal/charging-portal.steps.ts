import { Given, When, Then, BeforeAll, AfterAll,BeforeStep } from '@cucumber/cucumber';
import { Browser, Page as page, expect } from '@playwright/test';
import { chromium, Page } from 'playwright';
import globalVars from './charging-portal.variables';  // Import global variables for selectors and URLs
import highlightAndClick from './highlightAndClick';  // Import the helper function

let page: Page;  // Reference to the Playwright page object
let browser: Browser;

// Helper function to add sleep/delay
const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// Function to highlight an element
async function highlightElement(page: Page, selector: string): Promise<void> {
    // Ensure that the element exists before attempting to highlight it
    const elementHandle = await page.$(selector);
  
    if (!elementHandle) {
      console.error(`Element with selector "${selector}" not found`);
      return;
    }
  
    // Inject JavaScript to apply custom CSS for highlighting
    await page.evaluate((selector) => {
      const element = document.querySelector(selector) as HTMLElement;
      if (element) {
        // Apply CSS to highlight the element
        element.style.border = '4px solid red';  // Red border
        element.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';  // Light red background
        element.style.transition = 'border 0.3s ease, background-color 0.3s ease';  // Smooth transitions
      }
    }, selector);
  }

// Run before each individual step in a scenario
BeforeStep(async function () {
    await sleep(1000);
    // You can add any code here that should run before each step
    // For example, resetting certain states, logging, etc.
});

BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });  // Launch the browser (set to false for visible)
    const context = await browser.newContext();
    page = await context.newPage();  // Create a new page instance
});

// Step 1: Logging into the EV portal (to be used across all scenarios)
Given('the EV driver is logged into the portal', async function () {
    await page.goto(globalVars.baseURL);  // Navigate to the EV portal

    // Simulate login
    await page.fill(globalVars.selectors.usernameInput, 'testdriver');
    await page.fill(globalVars.selectors.passwordInput, 'password123');
    await highlightAndClick(page,globalVars.selectors.loginButton, { force: true });

    // Wait for the dashboard to appear, indicating a successful login
    await page.waitForSelector(globalVars.selectors.dashboard, { timeout: globalVars.defaultTimeout });
});

// Step 2: Selecting a charge card based on the provided card type
When('the EV driver selects the {string} charge card', async function (cardType: string) {
    const cardTypeOption = cardType === "Basic Charge Card" ? 'basic' :
                           cardType === "Premium Charge Card" ? 'premium' : 'payg';
    await page.selectOption(globalVars.selectors.cardTypeDropdown, cardTypeOption);
});

// Step 3: Submitting a request for the selected charge card
When('submits a request for the charge card', async function () {
    await page.waitForSelector(globalVars.selectors.requestCardButton, { state: 'visible' });
    await highlightAndClick(page, globalVars.selectors.requestCardButton, { force: true });
});

// Step 4: Processing the request and confirming the system processes it correctly
Then('the system should process the request', async function () {
    await page.waitForSelector(globalVars.selectors.requestConfirmation);  // Wait for confirmation
});

// Step 5: Issuing a charge card with a unique tag
Then('the system should issue the {string} charge card with a unique card tag', async function (cardType: string) {
    const cardTag = await page.textContent(globalVars.selectors.cardTag);
    expect(cardTag).toMatch(/^TAG-[A-Z0-9]+$/);  // Validate the card tag format (e.g., "TAG-123ABC")
});

// Step 6: Ensuring the agreement for the selected charge card is visible
Then('the agreement for {string} should be visible in the driver\'s account', async function (cardType: string) {
    const agreementText = await page.textContent(globalVars.selectors.agreementText);
    expect(agreementText).toContain(cardType);  // Ensure the agreement text reflects the card type
});

// Step 7: Verifying the issued charge card tag and checking the agreement
When('the EV driver verifies the issued charge card tag and agreement', async function () {
    const cardTag = await page.textContent(globalVars.selectors.cardTag);
    expect(cardTag).toMatch(/^TAG-[A-Z0-9]+$/);  // Validate the tag format

    const agreementText = await page.textContent(globalVars.selectors.agreementText);
    expect(agreementText).toBeTruthy();  // Ensure the agreement is visible
});

// Step 8: Ensuring the tag matches the expected format
Then('the tag should match the expected format', async function () {
    const cardTag = await page.textContent(globalVars.selectors.cardTag);
    expect(cardTag).toMatch(/^TAG-[A-Z0-9]+$/);  // Check the card tag format
});

// Step 9: Checking that the agreement includes necessary terms
Then('the agreement should include all necessary terms for {string}', async function (cardType: string) {
    const agreementText = await page.textContent(globalVars.selectors.agreementText);
    expect(agreementText).toContain(cardType);  // Check that the agreement includes all required terms
});

// Step 10: Starting a charging session using the charge card
When('the EV driver uses the {string} for a charging session', async function (cardType: string) {
    await highlightAndClick(page, globalVars.selectors.startChargingButton, { force: true });  // Start charging session
});

// Step 11: Verifying the charging session was successfully recorded
Then('the session should be successfully logged with the correct charge card tag', async function () {
    await page.waitForSelector(globalVars.selectors.chargingSessionSuccess);  // Wait for success confirmation
    const usedCardTag = await page.textContent(globalVars.selectors.usedCardTag);  // Retrieve the tag used
    const issuedCardTag = await page.textContent(globalVars.selectors.cardTag);  // Retrieve the issued tag
    expect(usedCardTag).toBe(issuedCardTag);  // Ensure the session was logged with the correct tag
});

// Step 12: Ending the contract for the charge card
When('the EV driver ends the contract for {string}', async function (cardType: string) {
    await highlightAndClick(page, globalVars.selectors.endContractButton, { force: true }); // End the contract for the specified charge card
});

// Step 13: Ensuring the charge card is marked as deactivated
Then('the system should mark the charge card as deactivated', async function () {
    const cardStatus = await page.textContent(globalVars.selectors.cardStatus);
    expect(cardStatus).toBe('Deactivated');  // Verify that the card is deactivated
});

// Step 14: Archiving the agreement after the contract is terminated
Then('the agreement should show to be ended to the customer', async function () {
    const contractEndedMessage = await page.isVisible(globalVars.selectors.contractEndedMessage);  // Confirm contract ended message
    expect(contractEndedMessage).toBe(true);  // Ensure the agreement is archived or marked as ended
     // Close the browser at the end of the scenario
});

AfterAll(async function () {
    console.log("Closing the browser after all tests...");
    if (browser) {
        await browser.close();
    }
});