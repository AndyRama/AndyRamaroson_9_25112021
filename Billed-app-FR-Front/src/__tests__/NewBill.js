/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"


describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page", () => {
    //envoyer un formulaire plein NewBill.handleSubmit
    //justificatif doit etre conformepour l'extension image(png, jpeg, jpg)
    //justificatif ne doit pas être au format pdf 
    
    test("Then ...", () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      //to-do write assertion
    })
  })
})
