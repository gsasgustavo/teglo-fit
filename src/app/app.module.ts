import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseRequestOptions } from '@angular/http';
import { route } from './app.routing';
import { AuthGuard } from './guards/auth.guards';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PesagensComponent } from './pesagens/pesagens.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        route
    ],
    declarations: [
        AppComponent,
        LoginComponent,
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
    ],
    bootstrap: [
        AppComponent
    ]
})
 
export class AppModule { }