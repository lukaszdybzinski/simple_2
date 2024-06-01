const jonas = {
    firstName: 'lukas',
    lastName: 'dybzinski',
    age: 2037- 1986,
    job: 'service',
    person: ['michael', 'peter', 'steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas['first'+ nameKey]);
console.log(jonas['last'+ nameKey]);

// const interestedIn = prompt('Chose between firstName, lastName, age, job and friends')

// console.log(jonas[interestedIn]);


jonas.location = 'Poland';
jonas['twiter']= '@costam'

console.log(jonas);