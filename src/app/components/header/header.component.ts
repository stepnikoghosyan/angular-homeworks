import { Component, EventEmitter, Output } from '@angular/core';

// models
import { Pages } from "../../models/pages.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() public onPageSelect = new EventEmitter<Pages>();

  public selectedPage: Pages = Pages.Home;

  public readonly PAGES = Pages;

  public onSelect(page: Pages): void {
    this.selectedPage = page;
    this.onPageSelect.emit(this.selectedPage);
  }
}
