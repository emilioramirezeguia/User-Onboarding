describe("User onboarding flow", function () {

    it("Can navigate to site.", function () {
        cy.visit("http://localhost:3000")

        cy.url().should("include", "localhost")
    })

    it("Disables submit button no info filled out.", function () {
        cy.get("button").should("be.disabled")
    })

    it("Can type a name", function () {
        cy.get(":nth-child(2) > input")
            .type("Lady Gaga")
            .should("have.value", "Lady Gaga")
    })

    it("Can type an email", function () {
        cy.get(':nth-child(3) > input')
            .type("lady@gaga.com")
            .should("have.value", "lady@gaga.com")
    })

    it("Can type an password", function () {
        cy.get(':nth-child(4) > input')
            .type("1234567890")
            .should("have.value", "1234567890")
    })

    it("Can accept terms of service", function () {
        cy.get(':nth-child(5) > input').check()
    })

    it("Enables submit button after info is filled in.", function () {
        cy.get("button").should("be.enabled")
    })

    it("Submits filled in info.", function () {
        cy.get("button").click()
    })

})