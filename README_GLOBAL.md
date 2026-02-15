# 🚀 Enterprise-Grade API Automation \| Playwright + TypeScript

![Playwright](https://img.shields.io/badge/Playwright-Test-green?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-LTS-green?logo=node.js)
![Architecture](https://img.shields.io/badge/Architecture-Clean%20Modular-blueviolet)
![Testing](https://img.shields.io/badge/Testing-API%20Automation-brightgreen)

------------------------------------------------------------------------

## 🌍 Overview

This project demonstrates enterprise-level API automation using
**Playwright Test + TypeScript**, following clean architecture
principles and scalable test design.

It showcases real-world automation patterns expected in modern SaaS,
fintech, and enterprise backend systems.

Designed to reflect production-ready QA engineering practices.

------------------------------------------------------------------------

## 🎯 Key Engineering Capabilities Demonstrated

-   Full CRUD API validation
-   Token-based authentication handling
-   Type-safe implementation (Strict TypeScript)
-   Modular service layer abstraction
-   Clean test isolation
-   Independent test execution
-   Structured test configuration via Playwright Projects
-   HTML reporting support

------------------------------------------------------------------------

## 🧠 Architectural Design

### Separation of Concerns

    tests/
     ├── api/        → Test specifications
     ├── support/    → Reusable API services
     └── ui/         → Optional UI extension

### Service Abstraction

Reusable functions:

-   createBooking()
-   createToken()

Encapsulation of request logic improves:

-   Maintainability
-   Scalability
-   Test readability
-   Code reuse

------------------------------------------------------------------------

## 🔎 Validation Strategy

Each test validates:

-   HTTP status codes
-   Business rules
-   Response payload integrity
-   Authentication mechanisms
-   Data mutation correctness
-   Resource lifecycle behavior

This approach mirrors real-world API quality gates.

------------------------------------------------------------------------

## 🧪 Sample Test Flow

1.  Create resource\
2.  Retrieve by ID\
3.  Update fully (PUT)\
4.  Update partially (PATCH)\
5.  Delete resource\
6.  Confirm deletion

------------------------------------------------------------------------

## 🧱 Tech Stack

-   Playwright Test
-   TypeScript (Strict Mode)
-   Node.js (LTS)
-   REST API Testing
-   Modular Test Architecture

------------------------------------------------------------------------

## ▶ How to Execute

Install dependencies:

    npm install
    npx playwright install

Run API project:

    npx playwright test --project=api

Open HTML report:

    npx playwright show-report

------------------------------------------------------------------------

## 📈 Why This Project Is Relevant for International Teams

This repository reflects:

-   Production-level automation structure
-   Clean code organization
-   Scalable design patterns
-   Maintainable TypeScript implementation
-   Professional testing discipline

It aligns with expectations for:

-   QA Engineer
-   SDET
-   Automation Engineer
-   Quality Architect
-   DevOps-oriented QA roles

------------------------------------------------------------------------

## 👨‍💻 Author

Rodrigo Silva\
QA Engineer \| API Automation \| DevOps Mindset\
Open to international remote opportunities
