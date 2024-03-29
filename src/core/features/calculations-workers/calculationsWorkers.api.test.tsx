import {getValidatedPassedAmount} from '@/application/workers/workers.api'



describe('webWorkers.api', () => {

    test('getValidatedPassedAmount - between range', () => {
        expect(getValidatedPassedAmount(10, 2, 32)).toBe(10)
    })

    test('getValidatedPassedAmount - lower value than min', () => {
        expect(getValidatedPassedAmount(1, 2, 32)).toBe(2)
    })

    test('getValidatedPassedAmount - higher value than max', () => {
        expect(getValidatedPassedAmount(100, 2, 32)).toBe(32)
    })

    test('getValidatedPassedAmount - empty string', () => {
        expect(getValidatedPassedAmount('', 2, 32)).toBe(2)
    })

})

export default {}
