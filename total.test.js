const total = require("./total")
const validateCardNumber = require("./total")

describe( "Totle Module test", () => {
    test("As a user I want to be able to get the total after submitting differenct prices", () => {
        expect(total([2.5, 78.12, 12.89])).toEqual(93.51)
    })
})