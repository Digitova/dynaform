export default function(input, args) {
    if(!Array.isArray(args) || !args[0]) throw "Length validator needs a length. You might have forgotten a colon after you specified the length validator. E.g., validators: ['maximum:6']"
    const length = parseInt(args[0], 10)
    return new Promise((resolve, reject) => {
        if(input.length > length) {
            reject('minimum length is ' + length)
        } else {
            resolve()
        }
    })
}
