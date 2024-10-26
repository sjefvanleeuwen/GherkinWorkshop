# Part 4 - Hands-on Basic Scenario Example
Scenario: User adds item to cart
  Given the user is on the shopping cart page
  When the user clicks “Add to Cart” for an item
  Then the item should appear in the shopping cart with a confirmation message