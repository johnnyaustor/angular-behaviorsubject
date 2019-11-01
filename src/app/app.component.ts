import { Component } from '@angular/core';
import { TitleService } from './services/title.service';
import { ConfigService } from './services/config.service';
import { Config } from './services/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'observable';
  conf: Config;

  constructor(
    private titleService: TitleService,
    private configService: ConfigService
  ) {
    this.titleService.title.subscribe((val) => {
      this.title = val;
    });

    this.configService.getConfig();
    this.configService.config.subscribe(data => this.conf = { ...data });
  }


}
