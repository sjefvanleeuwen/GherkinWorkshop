// global.ts
const globalVars = {
    baseURL: 'http://localhost:3241/charging-portal/index.html',  // Base URL of the EV portal
    defaultTimeout: 5000,  // Default timeout for actions
    selectors: {
        loginButton: 'button[type="submit"]',
        dashboard: '#dashboard',
        usernameInput: '#username',
        passwordInput: '#password',
        cardTypeDropdown: '#card-type',
        requestCardButton: '#request-card',
        requestConfirmation: '#request-confirmation',
        cardTag: '#card-tag',
        agreementText: '#agreement-text',
        endContractButton: '#end-contract',
        cardStatus: '#card-status',
        startChargingButton: '#start-charging',
        chargingSessionSuccess: '#charging-session-success',
        usedCardTag: '#used-card-tag',
        contractEndedMessage: '#contract-ended'
    }
};

export default globalVars;
