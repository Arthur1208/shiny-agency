import { formatQueryParams } from ".";


describe("test fonction query", () => {
    it("should je sais pas trop", () => {
        const expectedValue = "a1=1";
        expect(formatQueryParams({ 1: 1 })).toEqual(expectedValue)
    })
    it("should je sais pas trop2", () => {
        const expectedValue = "a1=true&a2=false";
        expect(formatQueryParams({ 1: true, 2: false })).toEqual(expectedValue)
    })
})