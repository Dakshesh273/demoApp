import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})




export class HomeComponent implements OnInit {

  counter: number = 0;


  cards: any = [
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "1st June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "2nd June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "3rd June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "4th June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "5th June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "1st June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "2nd June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "3rd June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "4th June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "5th June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "1st June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "2nd June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "3rd June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "4th June, 2021"
    },
    {
      "image": "https://dummyimage.com/600x400/000/fff.jpg",
      "title": "Title",
      "description": "This is short description",
      "date": "5th June, 2021"
    }
  ];
  newCards: any[] = new Array();
  showMoreBtn: boolean = true;

  constructor(public userService: UserService) {

    this.counter = 0;
    this.getData();
  }

  ngOnInit(): void {
  }

  getData() {
    console.log(this.counter);
    if (this.counter + 5 == this.cards.length) {
      this.showMoreBtn = false;
      return;
    }
    for (let i = this.counter + 1; i <= this.cards.length; i++) {
      this.newCards.push(this.cards[i - 1]);
      if (i % 5 == 0) break;
    }
    this.counter += 5;
  }

}
