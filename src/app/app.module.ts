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
import { AdminModule } from './admin/admin.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AdminModule,
        route
    ],
    declarations: [
        AppComponent,
        LoginComponent
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