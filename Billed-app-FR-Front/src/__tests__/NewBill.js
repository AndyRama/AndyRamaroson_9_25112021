/**
 * @jest-environment jsdom
 */

import { screen, fireEvent, waitFor } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"
import { localStorageMock } from "../__mocks__/localStorage.js"
import mockStore from "../__mocks__/store"
import { ROUTES, ROUTES_PATH } from "../constants/routes.js";
import userEvent from "@testing-library/user-event";
import router from "../app/Router"

jest.mock("../app/Store", () => mockStore)

beforeEach(() => {
  //On simule la connection sur la page Employee en parametrant le localStorage
  Object.defineProperty(window, 'localStorage', { value: localStorageMock })
  window.localStorage.setItem('user', JSON.stringify({
    type: 'Employee',
    email: 'employee@test.tld'
  }))
  // Afficher la page nouvelle note de frais
  document.body.innerHTML = NewBillUI()
})

describe("NewBill Unit test suites", () => {
  describe("Given I am connected as an employee", () => {
    describe("When I am on NewBill page", () => {
      // Envoyer un formulaire complet (NewBill.handleSubmit)
      // Justificatif doit etre conforme à l'extension jpg jepg png
      // Justificatif ne doit pas être un pdf

      describe("When I try to load a picture", () => {
        test("Then file sould be an picture", () => {
          // Récupération input file
          const newFile = screen.getByTestId('file')
          // Récupération de nouvelle instance de NewBill
          const onNavigate = (pathname) => document.body.innerHTML = ROUTES({ pathname })
          const newBillEmulation = new NewBill({ document, onNavigate, store: mockStore, localStorage: window.localStorage })
          const handleChangeFile = jest.fn((e) => newBillEmulation.handleChangeFile(e))
          // addEventListener handleChangeFile
          newFile.addEventListener("change", handleChangeFile)
          userEvent.click(newFile)
          //  Vérifié si le fichier est bien une image
          fireEvent.change(newFile, {
            target: {
              files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png'})],
            },
          })
          expect(newFile.files[0].type).toMatch(/(image\/jpg)|(image\/jpeg)|(image\/png)/gm)
        })

        test("then file should not be an image", ( )=> {
          const jsdomAlert = window.alert;
          window.alert = () => { };

          // Récupération input file
          const newFile = screen.getByTestId('file')
          // Récupération de nouvelle instance de NewBill
          const onNavigate = (pathname) => document.body.innerHTML = ROUTES({ pathname })
          const newBillEmulation = new NewBill({ document, onNavigate, store: mockStore, localStorage: window.localStorage })
          const handleChangeFile = jest.fn((e) => newBillEmulation.handleChangeFile(e))
          // addEventListener handleChangeFile
          newFile.addEventListener("change", handleChangeFile)
          userEvent.click(newFile)
          //  Vérifié si le fichier est bien une image
          fireEvent.change(newFile, {
            target: {
              files: [new File(['(⌐□_□)'], 'chucknorris.txt', {type: 'text/plain'})],
            },
          })
          expect(newFile.files[0].type).not.toMatch(/(image\/jpg)|(image\/jpeg)|(image\/png)/gm)
          window.alert = jsdomAlert; // restore the jsdom alert
        })

        test("Then ...", () => {
          const html = NewBillUI()
          document.body.innerHTML = html
        })
      })
    })
  })
})

// TEST NewBill submit form
describe("NewBill Integration Test Suites", () => {
  describe("Given I am auser connected as an employee", () => {
    describe("When I am on NewBill", () => { 
      test("Then I submit completed NewBill form and I am redirected on Bill, methode Post", async() => {}
      // route
      // value for Expense-name
      // value for Datapicker
      // value for Amount
      // value for Vat
      // value for Pct
      // File and fireEvent
      // Form Submission
      
      )
    })
  })
})
// API
// 404
// 500
