import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { TweetsComponent } from './tweets/tweets.component';
import {TweetService} from './tweet.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent,
    LoginComponent,
    TableComponent,
    UserComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    // HttpClientModule,
    HttpModule,

    FormsModule,
    RouterModule.forRoot([
      { path: 'user', component: UserComponent},
      { path: 'table', component: TableComponent},
      { path: 'dashboard', component: DashboardComponent},
    ])
  ],
  providers: [TweetService, TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
