export default function(inputAsString) {
    return new Promise((resolve, reject) => {
        if (inputAsString == '') {
            reject('required')
        } else {
            resolve()
        }
    })
}
