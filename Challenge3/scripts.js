const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = (parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2) * -1
const leo = `${leoName} ${leoSurname} (Owed: R ${parseFloat(leoBalance).toFixed(2) * -1})`
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${parseFloat(sarahBalance).toFixed(2) * -1})`
const total = "  Total amount owed: R "
const result = `\n ${leo} \n ${sarah} \n \n ${divider} \n ${total}${owed} \n ${divider}`
console.log(result)


