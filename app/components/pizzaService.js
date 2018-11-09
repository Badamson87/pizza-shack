import Pizza from "../models/pizza.js"
let total = 5
export default class PizzaService {
  constructor() { }
  calcPrice(pizza) {
    if (pizza.cheese) {
      total += 1
    }
    if (pizza.sausage) {
      total += 1.5
    }
    if (pizza.olives) {
      total += .75
    }
    if (pizza.pepperoni) {
      total += 2
    }
    return total
  }

  makePizza(formData) {

    let pizza = new Pizza(formData)
    return this.calcPrice(pizza);
  }
}


