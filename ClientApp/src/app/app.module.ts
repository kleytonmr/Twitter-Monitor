import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChartModule }     from 'angular2-highcharts'; 
import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';

import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { PositiveComponent } from './positive/positive.component';
import { NegativeComponent } from './negative/negative.component';
import { HistoricComponent } from './historic/historic.component';
import {TweetService} from './tweet.service';
import { ChartTesteComponent } from './chart-teste/chart-teste.component';
declare var require:any;


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent,
    LoginComponent,
    TableComponent,
    UserComponent,
    PositiveComponent,
    NegativeComponent,
    HistoricComponent,
    ChartTesteComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ChartModule.forRoot(require('highcharts')),

    FormsModule,
    RouterModule.forRoot([
      { path: 'user', component: UserComponent},
      { path: 'table', component: TableComponent},
      { path: 'negative', component: NegativeComponent},
      { path: 'positive', component: PositiveComponent},
      { path: 'historic', component: HistoricComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'chart-teste', component: ChartTesteComponent},
    ])
  ],
  providers: [TweetService, TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
