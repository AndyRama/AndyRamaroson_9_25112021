/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"
import { localStorageMock } from "../__mocks__/localStorage.js"
import mockStore from "../__mocks__/store"
import { ROUTES, ROUTES_PATH } from "../constants/routes.js";
import userEvent from "@testing-library/user-event";

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

 describe("Given I am connected as an employee", () => {
   describe("When I am on NewBill Page", () => {
     // recupération input file
     // recupération instance de class NewBill
     // eventListener handleChangeFile
     // verifie si le fichier est bien un image

     // recupération input file
     // recupération instance de class NewBill
     // eventListener handleChangeFile
     // verifie si le fichier est bien un image
     
     test("Then ...", () => {
       const html = NewBillUI()
       document.body.innerHTML = html
       //to-do write assertion
     })
   })
 })