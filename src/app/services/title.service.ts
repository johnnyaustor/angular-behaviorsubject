import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Title } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title = new BehaviorSubject<string>('title');
  constructor(
    private titleService: Title
  ) { }

  setTitle(title:string) {
    this.titleService.setTitle(title);
    this.title.next(title);
  }
}
