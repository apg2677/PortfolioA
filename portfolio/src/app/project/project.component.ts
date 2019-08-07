import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: any;
  @Input() image:any;
  
  constructor() { }

  ngOnInit() {
    console.log("project: " + this.project);

  }


}
