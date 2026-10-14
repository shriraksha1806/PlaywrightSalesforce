# Enterprise Test Automation Framework – Salesforce AUT

## 1. Project Overview

Build an enterprise-grade test automation framework for Salesforce as the Application Under Test (AUT).

The framework must support:

- Salesforce Web UI automation
- End-to-end business workflow testing
- API automation
- Database/data validation where applicable
- Cross-browser execution
- Parallel execution
- Environment-based configuration
- Test data management
- Reusable page/component objects
- BDD using Cucumber
- CI/CD execution
- Screenshots and videos on failure
- Trace collection
- HTML and Cucumber reports
- Logging
- Retry mechanism
- Tag-based execution
- Secure credential management
- Scalable folder structure suitable for enterprise projects

The framework should be designed so that new Salesforce modules and test cases can be added without modifying the existing framework architecture.

---

# 2. Technology Stack

## Core

- Node.js
- TypeScript
- Playwright
- Cucumber.js
- VS Code

## Testing

- Playwright Test APIs
- Cucumber BDD
- Playwright assertions
- APIRequestContext for API testing

## Reporting

- Cucumber HTML Report
- Playwright HTML Report
- Screenshots on failure
- Videos on failure
- Trace Viewer on failure

## Code Quality

- ESLint
- Prettier
- TypeScript strict mode

## CI/CD

Framework should be compatible with:

- GitHub Actions
- Jenkins
- Azure DevOps
- GitLab CI

---

# 3. AUT

Application Under Test:

Salesforce

The framework should support Salesforce modules such as:

- Login
- Home
- Accounts
- Contacts
- Leads
- Opportunities
- Cases
- Campaigns
- Reports
- Dashboards
- Users
- Setup
- Custom Salesforce Objects

The framework should be extensible to support additional Salesforce objects/modules.

---

# 4. Framework Architecture

Use the following architecture:

```text
Test Specification
        |
        v
Feature Files
        |
        v
Step Definitions
        |
        v
Business/Page Actions
        |
        v
Page Objects / Components
        |
        v
Playwright
        |
        v
Salesforce AUT