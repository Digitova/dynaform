export default function(input, args) {
    if(!Array.isArray(args) || !args[0] || !args[1])
        throw "Range validator needs a length. You might have forgotten a colon after you specified the length validator. E.g., validators: ['range:1:25']"
    const min = parseInt(args[0], 10),
          max = parseInt(args[1], 10),
          sanitizedInput = parseInt(input, 10)
    return new Promise((resolve, reject) => {
        if(isNaN(min) || isNaN(max)) reject('min and max must be numbers')
        if(isNaN(sanitizedInput)) reject('input must be a number')
        if(sanitizedInput < min || sanitizedInput > max) {
            reject('must be between ' + min + ' and ' + max)
        } else {
            resolve()
        }
    })
}
