Feature: EV Driver Requests Charge Card via Portal

  Scenario Outline: EV Driver requests a charge card via portal and completes the card lifecycle
    Given the EV driver is logged into the portal
    When the EV driver selects the "<Card Type>" charge card
    And submits a request for the charge card
    Then the system should process the request
    And the system should issue the "<Card Type>" charge card with a unique card tag
    And the agreement for "<Card Type>" should be visible in the driver's account

    When the EV driver verifies the issued charge card tag and agreement
    Then the tag should match the expected format
    And the agreement should include all necessary terms for "<Card Type>"

    When the EV driver uses the "<Card Type>" for a charging session
    Then the session should be successfully logged with the correct charge card tag

    When the EV driver ends the contract for "<Card Type>"
    Then the system should mark the charge card as deactivated
    And the agreement should show to be ended to the customer

  Examples:
    | Card Type          | Description                   | Validity Period   | Fee Structure   |
    | Pay-As-You-Go Charge Card  | No fixed fee, per session cost| Unlimited         | $0/month + $1/session|
    | Premium Charge Card | Card with higher access levels| 24 months         | $10/month       |
    | Basic Charge Card   | Standard card with monthly fee| 12 months         | $5/month        |
