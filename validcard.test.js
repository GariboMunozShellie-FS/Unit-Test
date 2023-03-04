const validateCardNumber = require("./validcard")

describe( "validate card test", () => {
    test("check to see if the card has the right amount of number", () => {
        expect(validateCardNumber("12345")).toBe("Invalid Credit card")
    })
})

describe( "validate card test", () => {
    test("check to see if the 12 digit card has the right amount of charaters", () => {
        expect(validateCardNumber("123456789012")).toBe("********9012")
    })
})

describe( "validate card test", () => {
    test("check to see if the 16 digit card has the right amount of charaters", () => {
        expect(validateCardNumber("1234567890123456")).toBe("************3456")
    })
})