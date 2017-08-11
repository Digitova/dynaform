import Regex from './Regex'

const regex = '\\d'

it('succeeds when a digit', () => {
    const test = ['1', '23', '22', '97']
    test.forEach(str => {
        expect(Regex(str, [regex])).resolves.toBeFalsy()
    })
})

it('rejects when not a digit', () => {
    const test = ['a', 'b', 'asdfasdf']
    test.forEach(str => {
        expect(Regex(str, [regex])).rejects.toBeTruthy()
    })
})
