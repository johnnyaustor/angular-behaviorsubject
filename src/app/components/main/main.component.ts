import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title: string;
  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit() {
  }

  onBtnClick() {
    this.titleService.setTitle(this.title);
  }

}
