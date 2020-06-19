describe("User onboarding flow", function () {

    it("Can navigate to the site.", function () {
        cy.visit("http://localhost:3000")

        cy.url().should("include", "localhost")
    })

    it("Can type a name", function () {
        cy.get(":nth-child(2) > input")
            .type("Lady Gaga")
            .should("have.value", "Lady Gaga")
    })

    it("Can type an email", function () {
        cy.get(':nth-child(3) > input')
    })

    it("Can type an password", function () {
        cy.get(':nth-child(4) > input')
    })
})