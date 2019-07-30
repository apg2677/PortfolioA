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
       this.portfolioLinks = ["https://apg2677.github.io/unit-4-game/", "https://apg2677.github.io/TriviaGame/",
      "https://apg2677.github.io/Psychic-Game/", "https://apg2677.github.io/GifTastic/",
      "https://stark-anchorage-35995.herokuapp.com/", "https://guarded-spire-69237.herokuapp.com/",
      "https://warm-wave-74995.herokuapp.com/"];
  }
}
