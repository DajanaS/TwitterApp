import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NavigationComponent, WikipediaService} from './navigation/navigation.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {LogoutComponent} from './logout/logout.component';
import {UserManagementService} from './user-management.service';
import {PublishTweetComponent} from './publish-tweet/publish-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    LogoutComponent,
    PublishTweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    PublishTweetComponent
  ],
  providers: [WikipediaService, UserManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
