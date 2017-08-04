import MaximumLength from './MaximumLength'

it('succeeds when length is under', () => {
    const test = ['a', 'aa', 'aaa', 'aaaa']
    test.forEach(str => {
        MaximumLength(str, 5).resolves.toBeNull()
    })
});
