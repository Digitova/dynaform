export default function(inputAsString) {
    return new Promise((resolve, reject) => {
        if(isNaN(parseFloat(inputAsString)) && isFinite(inputAsString)) {
            reject('must be numeric')
        } else {
            resolve()
        }
    })
}
