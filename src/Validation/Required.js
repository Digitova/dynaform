export default function(inputAsString) {
    return new Promise((resolve, reject) => {
        if (inputAsString == '') {
            reject('input is required')
        } else {
            resolve()
        }
    })
}
