# Lab: Mocking with `jest`

## Getting started

- Fork and clone repo
- Install dependencies: `npm install`
- cd into project directory
- Run tests: `npm run test:watch`
- You can also check your test coverage: `npm run test:coverage`

## Tasks

In this lab, the code for a payments processor has been implemented, and your task is to write tests for each function:

- `paymentService.js`
  - write unit test for `makePayment`
  - write unit test for `refundPayment`
- `main.js`
  - a few sample test cases are already provided in `main.test.js`. You need to remove the `.skip` on the tests and implement them
  - Hint: you need to mock the functions from `paymentService` and `queueService` to simulate the test scenarios
- `queueService.js`
  - write unit tests for `generateQueue`. 
  - Hint: you need to mock `math.randomInt` to simulate different test scenarios

**IMPORTANT**: not all functions will require mocking! If the function has a dependency on something from another file/library, mock that dependency. Otherwise, just test it like how you've been unit-testing functions
