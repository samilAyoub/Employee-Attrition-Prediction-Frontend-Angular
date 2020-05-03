import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tt';

  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggle($event) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
