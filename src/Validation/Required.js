export default function(inputAsString) {
    return new Promise((resolve, reject) => {
        inputAsString = inputAsString.toString().trim()
        if (inputAsString == '') {
            reject('Required')
        } else {
            resolve()
        }
    })
}
