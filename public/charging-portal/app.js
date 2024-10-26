document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const dashboard = document.getElementById('dashboard');
    const driverName = document.getElementById('driver-name');
    const chargeCardSection = document.getElementById('charge-card-section');
    const agreementSection = document.getElementById('agreement-section');
    const manageCardSection = document.getElementById('manage-card-section');
    const requestConfirmation = document.getElementById('request-confirmation');
    const cardTagElement = document.getElementById('card-tag');
    const agreementText = document.getElementById('agreement-text');
    const cardStatus = document.getElementById('card-status');
    const contractEndedMessage = document.getElementById('contract-ended');
    const chargingSection = document.getElementById('charging-section');
    const chargingSessionSuccess = document.getElementById('charging-session-success');
    const usedCardTagElement = document.getElementById('used-card-tag');

    let cardTypeSelected = '';
    let cardTag = '';

    // Dummy Login
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            loginForm.classList.add('hidden');
            dashboard.classList.remove('hidden');
            driverName.textContent = username;
        } else {
            alert('Please enter valid credentials');
        }
    });

    // Request Charge Card
    document.getElementById('request-card').addEventListener('click', function () {
        cardTypeSelected = document.getElementById('card-type').value;
        cardTag = generateCardTag();

        cardTagElement.textContent = cardTag;
        requestConfirmation.classList.remove('hidden');
        agreementSection.classList.remove('hidden');
        manageCardSection.classList.remove('hidden');
        chargingSection.classList.remove('hidden');

        // Show agreement based on the selected card type
        agreementText.textContent = getAgreementText(cardTypeSelected);
    });

    // End Contract
    document.getElementById('end-contract').addEventListener('click', function () {
        cardStatus.textContent = 'Deactivated';
        contractEndedMessage.classList.remove('hidden');
        chargingSection.classList.add('hidden');
    });

    // Start charging session
    document.getElementById('start-charging').addEventListener('click', function () {
        usedCardTagElement.textContent = cardTag; // Use the card tag from the requested card
        chargingSessionSuccess.classList.remove('hidden');
    });

    // Helper Functions
    function generateCardTag() {
        return 'TAG-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    function getAgreementText(cardType) {
        switch (cardType) {
            case 'basic':
                return 'This is the agreement for the Basic Charge Card. Monthly fee: $5.';
            case 'premium':
                return 'This is the agreement for the Premium Charge Card. Monthly fee: $10.';
            case 'payg':
                return 'This is the agreement for the Pay-As-You-Go Charge Card. No fixed fee, $1 per session.';
            default:
                return 'No agreement found.';
        }
    }
});
