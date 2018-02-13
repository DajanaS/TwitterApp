import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {LogoutComponent} from './logout/logout.component';
import {UserManagementService} from './user-management.service';
import {PublishTweetComponent} from './publish-tweet/publish-tweet.component';
import {TweetManagementService} from './tweet-management.service';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {AuthGuard} from './auth.guard';
import {LikeManagementService} from './like-management.service';
import {PublicProfileComponent} from './public-profile/public-profile.component';
import {AgePipe} from './pipes/age-pipe';
import {MomentModule} from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    LogoutComponent,
    PublishTweetComponent,
    EditProfileComponent,
    PublicProfileComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    MomentModule
  ],
  entryComponents: [
    PublishTweetComponent, EditProfileComponent
  ],
  providers: [UserManagementService, TweetManagementService, LikeManagementService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
