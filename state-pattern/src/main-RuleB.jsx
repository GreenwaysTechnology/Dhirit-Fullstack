//Rule B : we pass input, we change it, but we should return immutable object


//pure or not : updating the same memory address
// function updateProfile(city, profile) {
//     profile.city = city
//     return profile;
// }

function updateProfile(city, profile) {
    //Pattern 1: return new object
    // return {
    //     name: profile.name,
    //     city: city
    // }
    //pattern 2: Object.assign
    //return Object.assign({}, profile, { city: city })

    //pattern 3: using spread operator
    return { ...profile, city: city }
}
const profile = {
    name: 'Subramanian',
    city: 'Coimbatore'
}
console.log('before update', profile)
let result = updateProfile('chennai', profile)
console.log(profile === result ? "Same Object" : "Different")
console.log('After update', profile)