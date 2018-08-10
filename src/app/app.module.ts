import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { AuthGuard } from './core/auth.guard';
import { AdminGuard } from './core/admin.guard';


import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './core/app.routing.module';


import {MessageService} from './message/message.service';
import {AuthService} from './core/auth.service';
import {UserService} from './users/user/user.service';

import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
        MatToolbarModule, 
        MatMenuModule, 
        MatSnackBarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatGridListModule,
        MatCheckboxModule
  }
from '@angular/material';

import { MessageComponent } from './message/message.component';
import { NavComponent } from './nav/nav.component';


import { UsersComponent } from './users/users.component';
import { UserNewComponent } from './users/user-new/user-new.component';

import { LoginComponent } from './login/login.component';
import { UserPipe } from './users/user/user.pipe';
import { EqualValidator } from './validator/equal-validator.directive';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PersistenceProvider } from './persistence/persistence.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessageComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EqualValidator,
    UserNewComponent,
    UsersComponent,
    UserPipe
  ],
imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    
    
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  providers : [
    AuthService,
    AuthGuard,
    AdminGuard,
    PersistenceProvider,
    MockBackend, 
    BaseRequestOptions,
    MessageService,
    UserService
    
  ],
bootstrap: [AppComponent]
})
export class AppModule { }
