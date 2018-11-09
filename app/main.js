import PizzaController from './components/pizzaController.js'

class App {
  constructor() {
    this.controllers = {
      pizzaController: new PizzaController()
    }
  }
}

// @ts-ignore
window.app = new App()




// function _privateFn() {
//   console.log("the private function")
//   document.getElementById('private-data-display').innerText = privateData
// }

// let privateData = "a secret message"

// let controller = {
//   t1() {
//     console.log("this is test 1")
//     service.t2()
//     _privateFn()
//   }

// }

// let service = {
//   t2() {
//     console.log("this is test 2")
//   }
// }

// let app = {
//   init() {
//     console.log("start the app")
//   },
//   controller
// }


// window.app = app

// // function test1() {
// //   console.log("this is test 1")
// //   test2()
// // }

// // function test2() {
// // }

// // function test3(testFn) {
// //   console.log("this is test 3")
// //   testFn()
// // }


// // test3(test1)











