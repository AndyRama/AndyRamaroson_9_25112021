/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"
// Import localStorageMock
// Import Route
// Import UserEvent

//mockStore
 
 //simule la connection sur la page Employee en parametrant le localStorage
 //affiche la page nouvelle note de frais

 describe("Given I am connected as an employee", () => {
   describe("When I am on NewBill Page", () => {
     // recupération input file
     //recupération instance de class NewBill
     //eventListener handleChangeFile
     //verifie si le fichier est bien un image

     //recupération input file
     //recupération instance de class NewBill
     //eventListener handleChangeFile
     //verifie si le fichier est bien un image
     
     test("Then ...", () => {
       const html = NewBillUI()
       document.body.innerHTML = html
       //to-do write assertion
     })
   })
 })