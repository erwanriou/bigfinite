describe("Tabs selection flow", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("Should update the content when click on tabs", () => {
    const content = cy.get("#content")
    cy.get("#tab1").click(() => {
      expect(content).to.eq("Content of tab 1")
    })
    cy.get("#tab2").click(() => {
      expect(content).to.eq("Content of tab 2")
    })
    cy.get("#tab3").click(() => {
      expect(content).to.eq("Content of tab 3")
    })
  })
  it("Should change the color over the selected tabNav", () => {
    const tab2 = cy.get("#tab2")
    tab2.should("have.css", "color", "rgb(138, 149, 158)")
    tab2.click().should("have.css", "color", "rgb(0, 149, 242)")

    const tab3 = cy.get("#tab3")
    tab3.should("have.css", "color", "rgb(138, 149, 158)")
    tab3.click().should("have.css", "color", "rgb(0, 149, 242)")
  })
})
