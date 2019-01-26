import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {HistoryService} from './shared/routeing/history.service';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [HistoryService]
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private background: BackgroundMode,
      private historyService: HistoryService
  ) {
    this.initializeApp();
    this.historyService.loadRouting();
  }

  ngOnInit(): void {
    this.initializeButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initializeButtonEvent() {
    // バックボタンを押された後の動作
    this.platform.backButton.subscribe(() => {
      // ページ履歴を取得
      this.historyService.removeHistory();
      const history = this.historyService.getHistory();
      // console.log(history);
      // console.log(history.length);
      // if (this.isLogin === false) {
      //   this.background.moveToBackground();
      // }
      if (history.length < 1) {
        this.background.moveToBackground();
      }
    });
  }

}
