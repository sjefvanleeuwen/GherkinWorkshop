# Part 3 - Basic Gherkin Scenario Example
Scenario: User resets password
  Given the user is on the password reset page
  When the user enters their email address and submits the form
  Then the user should see a confirmation message saying “Password reset email sent.”