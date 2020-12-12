// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  initialize() {
    this.nameElement.value = this.name
  }

  log() {
    console.log(this.nameElement.value);
  }

  paste(event) {
    event.preventDefault();
    console.log('pastes are not allowed')
  }

  get name() {
    if (this.data.has('name')) {
      return this.data.get('name')
    } else {
      return "Default user"
    }
  }

  get nameElement() {
    return this.targets.find('name')
  }
}