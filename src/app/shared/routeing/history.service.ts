import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';


// Angularのヒストリを管理して、バックボタンが押された際に
@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history = [];

  constructor(private router: Router) {
  }

  public loadRouting(): void {
    this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(({urlAfterRedirects}: NavigationEnd) => {
          if (urlAfterRedirects === this.history[this.history.length - 1]) {
            this.history.pop();
            this.history = [...this.history, urlAfterRedirects];
          } else {
            this.history = [...this.history, urlAfterRedirects];
          }
        });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public removeHistory(): void {
    this.history.pop();
  }

  public clearHistory(): void {
    const temp = this.history[this.history.length - 1];
    this.history = [];
    this.history.push(temp);
  }

  public getPreviousUrl(): string {
    return this.history[this.history.length - 2] || '/index';
  }
}