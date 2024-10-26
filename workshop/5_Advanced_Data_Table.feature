# Part 5 - Advanced Gherkin Techniques: Data Table Example
Scenario: User login with different roles
  Given the user is on the login page
  When the user logs in with the following credentials:
    | username  | password | role       |
    | user1     | pass123  | regular    |
    | adminUser | pass456  | admin      |
    | guestUser | pass789  | guest      |
  Then the user should see their dashboard