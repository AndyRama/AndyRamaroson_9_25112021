/**
 * @jest-environment jsdom
 */

 import { screen, fireEvent, waitFor } from "@testing-library/dom"
 import userEvent from "@testing-library/user-event";
 import NewBillUI from "../views/NewBillUI.js"
 import NewBill from "../containers/NewBill.js"
 import { ROUTES, ROUTES_PATH } from "../constants/routes.js";
 import { localStorageMock } from "../__mocks__/localStorage.js"
 import mockStore from "../__mocks__/store"
//  import router from "../app/Router"
 
 jest.mock("../app/Store", () => mockStore)
 
 beforeEach(() => {
   //simule la connection sur la page Employee en parametrant le localStorage
   Object.defineProperty(window, 'localStorage', { value: localStorageMock })
   window.localStorage.setItem('user', JSON.stringify({
     type: 'Employee',
     email: 'employee@test.tld'
   }))
   //affiche la page nouvelle note de frais
   document.body.innerHTML = NewBillUI()
 })

 // Model for test d'intégration GET NewBills
describe('NewBill Unit Test Suites', () => {

  describe("Given I am connected as an employee", () => {
    describe("When I am on NewBill Page", () => {
      describe("When I try to load file", () => {
        test("Then file should be an image", () => {

          // recupération input file
          const newFile = screen.getByTestId('file')
          // recupération instance de class NewBill
          const onNavigate = (pathname) => document.body.innerHTML = ROUTES({ pathname })
          const newBillEmulation = new NewBill({ document, onNavigate, store: mockStore, localStorage: window.localStorage })
          expect(newFile.files[0].type).toMatch(/(image\/jpg)|(image\/jpeg)|(image\/png)/gm)
        })
      })
    })
  })
})