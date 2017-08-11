import MinimumLength from './MinimumLength'

it('succeeds when length is over', () => {
    const test = ['123456', '1234567', '12345678', '123456789']
    test.forEach(str => {
        expect(MinimumLength(str, [5])).resolves.toBeFalsy()
    })
})

it('succeeds when length is equal', () => {
    expect(MinimumLength('12345', [5])).resolves.toBeFalsy()
})

it('rejects when length is under', () => {
    const test = ['1234', '123', '12']
    test.forEach(str => {
        expect(MinimumLength(str, [5])).rejects.toBeTruthy()
    })
})
