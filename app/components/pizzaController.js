import PizzaService from "./pizzaService.js"

let _pizzaService = new PizzaService

let template = ""


export default class PizzaController {
  constructor() { }

  startPizza() {
    let template = `
      <form class="form-check" onsubmit="app.controllers.pizzaController.makePizza(event)">
        <input class="form-check-input" type="checkbox" id="extra-cheese" name="cheese">
        <label for="extra-cheese">Extra Cheese</label>
        <br/>
        <input class="form-check-input" type="checkbox" id="Sausage" name="sausage">
        <label for="sausage">Sausage</label>
        <br/>
        <input class="form-check-input" type="checkbox" id="Olives" name="olives">
        <label for="olives">Olives</label>
        <br/>
        <input class="form-check-input" type="checkbox" id="Pepperoni" name="pepperoni">
        <label for="pepperoni">Pepperoni</label>
        <button type="submit">Start Cooking</button>
      </form>
    `
    document.getElementById("main-content").innerHTML = template
  }

  makePizza(event) {
    event.preventDefault()
    let form = event.target;
    let formData = {
      cheese: form.cheese.checked,
      olive: form.olives.checked,
      sausage: form.sausage.checked,
      pepperoni: form.pepperoni.checked
    }
    let total = _pizzaService.makePizza(formData);
    document.getElementById("amount").innerText = total.toString()
  }
}