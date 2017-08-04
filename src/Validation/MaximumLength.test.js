import MaximumLength from './MaximumLength'

it('succeeds when length is under', () => {
    const test = ['a', 'aa', 'aaa', 'aaaa']
    test.forEach(str => {
        expect(MaximumLength(str, [5])).resolves.toBeFalsy()
    })
})

it('succeeds when length is equal', () => {
    expect(MaximumLength('12345', [5])).resolves.toBeFalsy()
})

it('rejects when length is over', () => {
    const test = ['123456', '1234567', '12345678']
    test.forEach(str => {
        expect(MaximumLength(str, [5])).rejects.toBeTruthy()
    })
})
