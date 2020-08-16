export default class AuthPage {

      get email() {
            return cy.get('[type="text"]')
      }

      get pass() {
            return cy.get(".form-control.mt-3")
      }

      get loginBtn() {
            return cy.get(".btn ").contains("Login")
      }

      login(mejl, sifra) {
            this.email.type(mejl)
            this.pass.type(sifra)
            this.loginBtn.click()


      }
}
export const authPage = new AuthPage()