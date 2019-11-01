import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Config } from './config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config = new BehaviorSubject<Config>({ base_url: '' });

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Config>('assets/config.json').subscribe(data => this.config.next({ ...data }));
  }
}
