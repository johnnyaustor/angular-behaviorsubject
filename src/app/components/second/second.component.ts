import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Config } from 'src/app/services/config';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  conf: Config;

  constructor(
    private configService: ConfigService
  ) {
    this.configService.config.subscribe(data => this.conf = { ...data });
  }

  ngOnInit() {
  }

}
