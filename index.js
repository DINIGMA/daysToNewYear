const newYear = new Date(new Date().getFullYear() + 1, 0, 1)
const daysToNewYear = Math.ceil((newYear - new Date())/(1000* 60 * 60 * 24))
console.log(daysToNewYear);