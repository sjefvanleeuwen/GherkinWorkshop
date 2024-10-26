
# Part 3: Getting Started with Gherkin

**Time:** 20 minutes  
**Objective:** Introduce participants to Gherkin syntax, demonstrate basic structure, and provide initial hands-on practice to build familiarity with writing UAT scenarios.

---

### 3.1 Introduction to Gherkin Syntax (5 mins)
- **Overview:** Explain Gherkin as a simple, structured language for writing UAT scenarios that uses plain English to describe software behavior.
  - **Syntax:** Introduce the main components of Gherkin's syntax:
    - **Given** – describes the initial context or setup.
    - **When** – the action or event that triggers the scenario.
    - **Then** – the expected outcome or result.
  - **Example Structure:**  
    ```gherkin
    Scenario: User logs into the application
      Given the user is on the login page
      When the user enters valid credentials
      Then the user should be directed to the dashboard
    ```

#### Facilitator Note:
- Explain that this structure ensures scenarios are written from a user perspective, making it easier to understand and test requirements.

---

### 3.2 Setting Up Tooling for Gherkin (5 mins)
- **Tool Selection:** Briefly introduce Visual Studio Code (VS Code) as a versatile text editor for writing and managing Gherkin files.
  - **VS Code Plugins:** Recommend installing Gherkin-specific extensions, such as “Cucumber (Gherkin) Full Support,” for syntax highlighting and autocompletion.
  - **File Naming Convention:** Mention that Gherkin files typically use the `.feature` extension, which helps organize and identify feature files.
  
- **Quick Setup Guide:** Walk participants through:
  - Opening VS Code and creating a new `.feature` file.
  - Enabling syntax highlighting by installing the recommended Gherkin plugin.

#### Facilitator Note:
- Ensure everyone is set up with VS Code and the necessary plugin. If participants are already familiar with VS Code, this step can be brief.

---

### 3.3 Hands-On: Writing a Basic Gherkin Scenario (10 mins)
- **Objective:** Guide participants through writing a simple Gherkin scenario from scratch based on a sample user story.

#### Step-by-Step Exercise:
1. **Introduce the User Story** (1 min):
   - **Example User Story:** “As a user, I want to reset my password so that I can regain access to my account.”
  
2. **Guide the Group Through Writing the Scenario** (5 mins):
   - **Step 1 - Given:** Describe the initial context.  
     - Example: `Given the user is on the password reset page`
   - **Step 2 - When:** Define the user’s action.  
     - Example: `When the user enters their email address and submits the form`
   - **Step 3 - Then:** State the expected result.  
     - Example: `Then the user should see a confirmation message saying “Password reset email sent.”`

   - **Final Gherkin Scenario:**
     ```gherkin
     Scenario: User resets password
       Given the user is on the password reset page
       When the user enters their email address and submits the form
       Then the user should see a confirmation message saying “Password reset email sent.”
     ```

3. **Individual Exercise (4 mins):**  
   - Prompt each participant to draft a similar Gherkin scenario for a different basic user story (e.g., "User updates their profile" or "User adds an item to their cart").
   - Encourage participants to use “Given-When-Then” to capture the setup, action, and outcome.

4. **Optional Peer Sharing:**  
   - If time permits, have one or two participants share their scenarios with the group for quick feedback on clarity and structure.

---

**Summary of Part 3:**  
This section gives participants a practical introduction to Gherkin, including setup in VS Code and hands-on practice with a simple scenario. This prepares them for more advanced Gherkin structures in the next section.

---
