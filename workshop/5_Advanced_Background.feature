# Part 5 - Advanced Gherkin Techniques: Background Example
Feature: Dashboard access
  Background:
    Given the user is logged in

  Scenario: User views dashboard
    When the user navigates to the dashboard page
    Then the user should see the dashboard content

  Scenario: User views account settings
    When the user navigates to the settings page
    Then the user should see the account settings options