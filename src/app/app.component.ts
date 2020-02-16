import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public loadedFeature: string = "recipe";

  constructor() {}

  ngOnInit(): void {

  }

  public onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}


