export default function(inputAsString, args) {
    const regText = args.join(''),
          flags   = 'gim',
          regex   = new RegExp(regText, flags)
    if(!regex) reject('invalid regular expression')
    return new Promise((resolve, reject) => {
        if(regex.test(inputAsString)) {
            resolve()
        } else {
            reject('invalid')
        }
    })
}
