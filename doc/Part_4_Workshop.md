
# Part 4: Hands-on Gherkin Practice

**Time:** 30 minutes  
**Objective:** Provide participants with hands-on experience writing Gherkin scenarios based on realistic user stories, facilitating deeper understanding and confidence with Gherkin syntax.

---

### 4.1 Group Activity Setup (5 mins)
- **Objective:** Divide participants into small groups (ideally with a mix of BAs and Testers) to work collaboratively on creating Gherkin scenarios.

#### Instructions:
- **Divide into Groups:** Form groups of 2-3 people to encourage discussion and collaboration.
- **Assign User Stories:** Provide each group with one user story from a predefined set (or allow each group to select one).
  - **Example User Stories:**
    - “As a user, I want to add items to my cart so I can purchase them later.”
    - “As an admin, I want to be able to deactivate user accounts to manage account status.”
    - “As a user, I want to view my transaction history to track my purchases.”

- **Goal:** Each group should draft a complete Gherkin scenario based on their assigned story using the Given-When-Then structure.

#### Facilitator Note:
- Remind groups to keep the scenarios focused on core user actions and outcomes without overcomplicating details.

---

### 4.2 Group Work: Drafting Basic Gherkin Scenarios (10 mins)
- **Objective:** Each group works together to draft a basic Gherkin scenario for their assigned user story.

#### Activity:
1. **Guided Drafting:** Ask each group to follow these steps for creating their scenario:
   - Define the **Given** context: Set up any preconditions or starting points for the scenario.
   - Define the **When** action: Describe the user’s main action that triggers the scenario.
   - Define the **Then** outcome: Specify the expected result after the action is performed.

2. **Example Scenario Outline:**
   - **Given:** The user is on the shopping cart page.
   - **When:** The user clicks “Add to Cart” for an item.
   - **Then:** The item should appear in the shopping cart with a confirmation message.

   **Resulting Scenario:**
   ```gherkin
   Scenario: User adds item to cart
     Given the user is on the shopping cart page
     When the user clicks “Add to Cart” for an item
     Then the item should appear in the shopping cart with a confirmation message
   ```

#### Facilitator Note:
- Circulate among the groups to answer questions, give feedback, and ensure that each group is adhering to the “Given-When-Then” structure.

---

### 4.3 Scenario Review & Feedback Session (10 mins)
- **Objective:** Groups share their scenarios to receive feedback on clarity, alignment with the user story, and Gherkin syntax.

#### Activity:
1. **Group Sharing:** Have one representative from each group read their scenario aloud or display it on a shared screen.
2. **Facilitator Feedback:** Provide constructive feedback on each scenario, focusing on:
   - Clarity: Is the scenario understandable and specific?
   - Completeness: Does it cover the setup, action, and expected result?
   - User Perspective: Does it capture the scenario from the user’s perspective?

#### Tips for Facilitator Feedback:
- Encourage simplicity and focus. If a scenario seems too complex, suggest breaking it down or focusing on one core action.
- Ensure all scenarios avoid technical details, focusing instead on user actions and expected outcomes.

---

### 4.4 Independent Practice: Enhancing Scenarios (5 mins)
- **Objective:** Allow participants to practice improving or extending their Gherkin scenarios individually, adding depth or handling slight variations.

#### Activity:
1. **Scenario Extension:** Ask each participant to independently add an extra condition or variation to their group’s scenario.
   - **Example Extension:** For the shopping cart scenario, they might add an additional step: “And the cart total should update to reflect the new item.”

2. **Peer Review:** If time permits, ask participants to pair up briefly and review each other's enhancements, suggesting minor improvements for clarity or structure.

---

**Summary of Part 4:**  
This segment provides participants with hands-on experience in drafting, reviewing, and refining Gherkin scenarios in small groups, helping solidify their understanding of the Gherkin structure and syntax. This also sets the stage for the advanced techniques in Part 5.

---
