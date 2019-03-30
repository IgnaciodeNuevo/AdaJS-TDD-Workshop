import isValidString from './isValidString';

describe("The password validator verifies that a valid password", () => {
    it("is a string", () => {
        const password = "hello";
        expect(isValidString(password)).toBeTruthy();
    });

    it("is a number", () => {
        const password = 8;
        expect(isValidString(password)).toBeTruthy();
    });
});

describe("The password validator verifies that an invalid password", () => {
    it("is a not empty", () => {
        const password = "";
        expect(isValidString(password)).toBeFalsy();
    });

    it("is a not special character", () => {
        const password = "hola!";
        expect(isValidString(password)).toBeFalsy();
    });
});


