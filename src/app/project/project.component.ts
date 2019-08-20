import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
  @Input() project: any;
  @Input() image: any;

  constructor() {}

  ngOnInit() {
    console.log("project: " + this.project);
  }

  GetProject(i) {
    // alert(portfolioLinks[i]);
    var portfolioLinks = [
      "https://apg2677.github.io/unit-4-game/",
      "https://apg2677.github.io/TriviaGame/",
      "https://apg2677.github.io/Psychic-Game/",
      "https://apg2677.github.io/GifTastic/",
      "https://stark-anchorage-35995.herokuapp.com/",
      "https://guarded-spire-69237.herokuapp.com/",
      "https://warm-wave-74995.herokuapp.com/"
    ];
    window.location.href = portfolioLinks[i];
  }
}
