import Range from './Range'

const range = [1, 12]

it('succeeds when between range', () => {
    const test = [1, 2, 3, 4, 12]
    test.forEach(str => {
        expect(Range(str, range)).resolves.toBeFalsy()
    })
})

it('rejects when outside of range', () => {
    const test = [0, -12, 56, 13, 254]
    test.forEach(str => {
        expect(Range(str, range)).rejects.toBeTruthy()
    })
})

it('rejects when non-numeric', () => {
    const test = ['not a number']
    test.forEach(str => {
        expect(Range(str, range)).rejects.toBeTruthy()
    })
})
