import { Component } from '@angular/core';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'observable';

  constructor(
    private titleService: TitleService
  ) {
    this.titleService.title.subscribe((val) => {
      this.title = val;
    });
  }
}
