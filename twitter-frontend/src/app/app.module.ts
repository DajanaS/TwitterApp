import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {MomentModule} from 'angular2-moment';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {LogoutComponent} from './logout/logout.component';
import {PublishTweetComponent} from './publish-tweet/publish-tweet.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {PublicProfileComponent} from './public-profile/public-profile.component';

import {UserManagementService} from './user-management.service';
import {TweetManagementService} from './tweet-management.service';
import {LikeManagementService} from './like-management.service';
import {AuthGuard} from './auth.guard';
import {AgePipe} from './pipes/age-pipe';

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
