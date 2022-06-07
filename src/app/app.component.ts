import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs-compat/operator/bufferToggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails = 'Display Details'
  showDetails = false;
  timestampArray = [];


onShowDetails() {
  if (this.showDetails === false) {
    this.showDetails = true;
    this.timestampArray.push("The details were shown on " + new Date())
    this.displayDetails = 'Hide Details'
  }
  else {
    this.showDetails = false;
    this.timestampArray.push("The details were hidden on " + new Date())
    this.displayDetails = 'Display Details'
  }
}
getColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
styleObject(index) {
  if (index >= 4) {
    return {backgroundColor: 'blue', borderStyle: 'solid', borderWidth: '5px', borderColor: this.getColor()}
  }
  else{
    return {backgroundColor: 'transparent', borderStyle: 'solid', borderWidth: '5px', borderColor: this.getColor()}
  }
  }
}

