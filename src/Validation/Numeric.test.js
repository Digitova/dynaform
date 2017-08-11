import Numeric from './Numeric'

it('succeeds when numeric', () => {
    const test = ['12', '120', '012', '1.12', '1.00000001', '1.0000']
    test.forEach(str => {
        expect(Numeric(str)).resolves.toBeFalsy()
    })
})

it('rejects when non-numeric', () => {
    const test = ['a', 'asbs-1010', '010.--', '1-2']
    test.forEach(str => {
        expect(Numeric(str)).rejects.toBeTruthy()
    })
})
