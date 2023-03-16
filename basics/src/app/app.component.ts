import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: ` <h1>{{title}}</h1> `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  name = 'luis raigosa';
  imgUrl = 'https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0'
  images = [
    "https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0",
    "https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0",
    "https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0"
  ]
  currentDate = new Date();
  cost = 2000;
  tempature = 25.3;
  pizza = {
    toppings: ['pepperoni', 'bacon', 'cheese'],
    price: 10
  }

  blueClass = false;
  fontSize = 16;

  getName() {
    return this.name;
  }

  // event binding done with parenthesis
  // property binding done with brackets

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }

}
