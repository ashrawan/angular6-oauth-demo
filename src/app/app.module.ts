import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';
import {HttpInterceptorService} from './auth/http-interceptor.service';

import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { AddressComponent } from './component/address/address.component';
import { RegisterComponent } from './component/register/register.component';
import { AddressService } from './services/address.service';
import { AddAddressComponent } from './component/add-address/add-address.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailComponent,
    AboutComponent,
    LoginComponent,
    UserListComponent,
    NavigationComponent,
    NotFoundComponent,
    AddressComponent,
    RegisterComponent,
    AddAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, AddressService, AuthGuard, AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent] 
})
export class AppModule { }
