import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guards';
import { AdminComponent } from './admin.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PesagensComponent } from './pesagens/pesagens.component';
import { LoginComponent } from '../login/login.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: '', component: AdminComponent, children: [
        { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
        { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
        { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
        { path: 'pesagens', component: PesagensComponent, canActivate: [AuthGuard] },
        { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] }
    ]},
];

export const route=RouterModule.forRoot(appRoutes);