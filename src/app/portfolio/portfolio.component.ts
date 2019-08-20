import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  portfolioLinks : any[];


  constructor() { }

  ngOnInit() {
       this.portfolioLinks = [
         {id: 1, name: 'RPG Game', link: "https://apg2677.github.io/unit-4-game/", img:"./assets/images/rpgImage.jpeg"},
         {id: 2, name:'Trivia', link: "https://apg2677.github.io/TriviaGame", img:"./assets/images/kramerprotrait.jpeg"},
         {id:3, name: 'Psychic', link: "https://apg2677.github.io/Psychic-Game/", img:"./assets/images/psychic.jpg"},
         { id:4, name: 'GifTastic', link:"https://apg2677.github.io/GifTastic/", img:"./assets/images/giftastic.jpeg"},
         { id:5, name: 'Burger', link:"https://stark-anchorage-35995.herokuapp.com/", img:"./assets/images/burger1.png"},
         { id:6, name: 'Friend Finder', link:"https://guarded-spire-69237.herokuapp.com/", img:"./assets/images/friend1.png"},
         { id:7, name: 'Bill Tracker', link:"https://warm-wave-74995.herokuapp.com/", img:"./assets/images/bills.png"},
       ];
     
  }
  LoadProject(project) {
    alert("Load:" + project.name);
    window.location.href = project.link;
  }
}
// this.portfolioLinks = ["https://apg2677.github.io/unit-4-game/", "https://apg2677.github.io/TriviaGame/",
//       "https://apg2677.github.io/Psychic-Game/", "https://apg2677.github.io/GifTastic/",
//       "https://stark-anchorage-35995.herokuapp.com/", "https://guarded-spire-69237.herokuapp.com/",
//       "https://warm-wave-74995.herokuapp.com/"];