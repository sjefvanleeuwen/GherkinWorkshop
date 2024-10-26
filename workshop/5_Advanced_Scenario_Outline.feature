# Part 5 - Advanced Gherkin Techniques: Scenario Outline Example
Scenario Outline: Search for products
  Given the user is on the search page
  When the user searches for "<product>"
  Then the results should display items related to "<product>"

  Examples:
    | product    |
    | laptop     |
    | smartphone |
    | tablet     |