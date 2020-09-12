let findTheOldest = function (persons) {
  return persons.reduce((obj, person) => {
    if (calculateAge(person) > calculateAge(obj)) {
      obj = person;
    }
    return obj;
  });
};

function calculateAge(person) {
  let currentYear = new Date().getFullYear();
  if (!person.yearOfDeath) {
    return currentYear - person.yearOfBirth;
  }
  return person.yearOfDeath - person.yearOfBirth;
}

module.exports = findTheOldest;
