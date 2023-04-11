let firstName = 'Emmanuel'
let middleName = ''
let lastName = 'Urias'

function stringLength(str: string): number {
    let num: number = 0

    for (let i: number = 0; i < str.length; i++) {
        num++
    }   
    return num
}

function nameLengthMultiplier(firstName: string, lastName: string, middleName?: string): string {
    let value: number = stringLength(firstName)
    let multiplier: number = stringLength(lastName)

    if (middleName) {
        return 'You have a weird middle name'
    }
    else {
        return `The length of your first name times your last name ${value * multiplier}`
    }

}

console.log(nameLengthMultiplier(firstName, lastName, middleName))