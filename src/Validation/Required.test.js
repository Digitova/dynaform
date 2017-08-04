import Required from './Required'

it('succeeds there is something', () => {
    const test = ['a', 'aa', 'aaa', 'aaaa', 1, 0, 123, 0.0, '""']
    test.forEach(str => {
        expect(Required(str)).resolves.toBeFalsy()
    })
})

it('rejects when it is empty', () => {
    const test = ['', ' ', "", ``, '    ', null]
    test.forEach(str => {
        expect(Required(str)).rejects.toBeTruthy()
    })
})
