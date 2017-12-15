import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseRequestOptions } from '@angular/http';
import { route } from './admin.routing';
import { AuthGuard } from '../guards/auth.guards';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PesagensComponent } from './pesagens/pesagens.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,    
    BrowserModule,
    FormsModule,
    HttpModule,
    route
  ],
  declarations: [
    AdminComponent,
    AboutComponent,
    HomeComponent,
    UserComponent,
    PesagensComponent,
    PageNotFoundComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    BaseRequestOptions
  ]
})
export class AdminModule { }
