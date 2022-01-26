import { Component } from '@angular/core';

// models
import { Pages } from "./models/pages.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public selectedPage: Pages = Pages.Home;

  public readonly PAGES = Pages;

  public onPageSelect(value: Pages): void {
    this.selectedPage = value;
  }
}
