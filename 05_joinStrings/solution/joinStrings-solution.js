// Join Strings
firstName= "Sebastian"
lastName = "Torres"
thisYear = 2025
birthYear = 2003

greeting =  "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old."


// Add your code right below, good luck!

fullName = firstName + " " + lastName;
age = thisYear - birthYear;
// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
