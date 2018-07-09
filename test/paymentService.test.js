const paymentService = require('../src/paymentService')

describe('makePayment', () => {
    test('returns a message using the argument', () => {
        let result = paymentService.makePayment(10)
        expect(result).toBe('payment made for $10')
    })
})

describe('refundPayment', () => {
    test('returns a message using the argument', () => {
        let result = paymentService.refundPayment(10)
        expect(result).toBe('refund made for $10')
    })
})
