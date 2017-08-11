export default function(inputAsString) {
    return new Promise((resolve, reject) => {
        if(isNaN(filterNumber(inputAsString))) {
            reject('must be numeric')
        } else {
            resolve()
        }
    })
}

function filterNumber(value) {
  if (/^\-?([0-9\.]+)$/.test(value))
    return Number(value)
  return NaN
}
