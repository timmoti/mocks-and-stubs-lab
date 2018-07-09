const makePayment = jest.fn()
const refundPayment = jest.fn()
const mockQueueService = jest.fn()

jest.doMock('../src/paymentService.js', () => {
  return {
    makePayment: makePayment,
    refundPayment: refundPayment,
  }
})
jest.doMock('../src/queueService.js', () => {
  return mockQueueService
})
const processPayments = require("../src/main");

beforeEach(() => {
  makePayment.mockClear()
  refundPayment.mockClear()
  mockQueueService.mockClear()
})

test('does not call makePayment or refundPayment when paymentQueue is empty', () => {
  mockQueueService.mockReturnValue([])

  processPayments()

  expect(makePayment).not.toHaveBeenCalled()
  expect(refundPayment).not.toHaveBeenCalled()
});

test('calls makePayment when next item in paymentQueue is positive', () => {
  mockQueueService.mockReturnValue([2])

  processPayments()

  expect(makePayment).toHaveBeenCalled()
  expect(refundPayment).not.toHaveBeenCalled()
})

test('calls refundPayment when next item in paymentQueue is negative', () => {
  mockQueueService.mockReturnValue([-1])

  processPayments()

  expect(refundPayment).toHaveBeenCalled()
  expect(makePayment).not.toHaveBeenCalled()
})
