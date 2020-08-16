export default class CreatePage {

      get title() {
            return cy.get('#title')
      }

      get professor() {
            return cy.get("#professor")
      }

      get loginBtn() {
            return cy.get(".btn ").contains("Login")
      }

      login(mejl, sifra) {
            this.email.type(mejl)
            this.pass.type(sifra)


      }
}
export const createPage = new CreatePage()