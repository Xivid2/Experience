// 1. Array Extension
(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }

    Array.prototype.skip = function (n) {
        return this.slice(n)
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n)
    }

    Array.prototype.sum = function (params) {
        return this.reduce((a, b) => a + b, 0)
    }

    Array.prototype.average = function (params) {
        return this.sum() / this.length
    }
}());

// 2. Construction Crew
function solve(inputObj) {
    let weight = inputObj.weight;
    let experience = inputObj.experience;
    let levelOfHydrated = inputObj.levelOfHydrated;
    let newLevelofHydrated = (weight * experience) / 10;
    let dizziness = inputObj.dizziness;
    if ( dizziness === true ) {
        return {
            weight,
            experience,
            levelOfHydrated: newLevelofHydrated + levelOfHydrated,
            dizziness: false
        }
    } else {
        return inputObj;
    }
}
// console.log(solve({ weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true }
//   ))

// 3. Car Factory
