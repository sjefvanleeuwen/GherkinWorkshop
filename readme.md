
# EV Charging Portal Test Suite

This project is an example automates the testing of the **EV Charging Portal** using **TypeScript**, **Cucumber**, and **Playwright**. The tests are written in a **Behavior-Driven Development (BDD)** style to simulate a user's interaction with the portal, including requesting a charge card, verifying agreements, using the charge card for charging, and ending contracts.

This portal is a intro demo to what you can achieve with this setup. It is part of a aprox. 2 hour [Gherkin Workshop](./doc/Gherkin_Workshop_Agenda.md).

## Table of Contents
1. [Description](#description)
2. [Features](#features)
3. [Installation](#installation)
4. [Running Tests](#running-tests)
5. [Debugging Tests](#debugging-tests)
6. [Main Scenario Description](#main-scenario-description)
7. [Project Structure](#project-structure)

## Description

The **EV Charging Portal Test Suite** tests the interactions between an EV driver and a charging portal system. The suite automates various scenarios such as requesting charge cards, verifying agreements, logging in, and using charge cards for EV charging. The tests ensure the system behaves as expected during these operations.

The project leverages:
- **Cucumber**: For defining and running the BDD-style test scenarios.
- **Playwright**: For browser automation and interaction.
- **TypeScript**: For writing strongly typed step definitions and improving code quality.

## Features

- **Automated browser tests** for EV driver actions like logging in, requesting charge cards, verifying terms, and using charge cards.
- Uses **BDD (Behavior-Driven Development)** style with Cucumber to define user scenarios.
- Efficient browser automation using **Playwright**.
- Fully customizable, reusable hooks (`BeforeAll`, `AfterAll`, `BeforeStep`) for setup, teardown, and step-specific actions.

## Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ev-charging-portal-tests.git
   cd ev-charging-portal-tests
   ```

2. **Install dependencies**:
   Install the necessary project dependencies using npm:
   ```bash
   npm install
   ```

## Running Tests

To run the tests, use the following command in two seperate shells:

```bash
npm run server
npm run test
```

This will start **Cucumber** with **ts-node**, run the test suite, and output the results in the terminal.

## Debugging Tests

1. **Start Debugging**:
   - Make sure you do a ```npm run server``` in a seperate shell.
   - Select the `Debug Cucumber Tests` configuration in the Debug panel in VS Code.
   - Press `F5` to start debugging.
   - You can use **F10 (Step Over)** to step over lines of code or **F11 (Step Into)** to go inside a function or step.

Debugging with breakpoints allows you to step through each test, inspect variables, and get a deeper understanding of what happens at each step in the test.

## Main Scenario Description

The primary scenario tested in this suite simulates an **EV driver requesting a charge card** via the portal. Here's an outline of the process:

1. The EV driver logs into the portal.
2. The driver selects a charge card from several options (e.g., Basic Charge Card, Premium Charge Card).
3. The system processes the request and issues the selected charge card with a unique tag.
4. The driver verifies the card tag and checks the agreement associated with the card.
5. The driver uses the card for a charging session.
6. Finally, the driver ends the contract, deactivating the charge card, and the agreement is archived.

This scenario ensures that the charge card lifecycle works smoothly from request to contract termination.

## Project Structure

The project structure follows a typical **Cucumber + Playwright + TypeScript** setup:

```
.
├── features/                   # Contains all feature files and step definitions
│   ├── charging-portal/         # Specific to charging portal scenarios
│   │   ├── charging-portal.feature
│   │   ├── charging-portal.steps.ts
├── node_modules/                # Installed dependencies
├── cucumber.config.ts           # Cucumber configuration file
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration file
└── README.md                    # This file
```

## Conclusion

This test suite provides a comprehensive way to validate the functionality of the **EV Charging Portal** by simulating real-world user interactions. It automates the entire lifecycle of a charge card request and usage, ensuring that the system behaves correctly throughout. Feel free to explore and extend the test scenarios as needed!
