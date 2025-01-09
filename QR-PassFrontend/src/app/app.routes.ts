import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'cards', pathMatch: 'full' },
    { path: 'cards', component: CardComponent },
    {
        path: 'authenticate', component: AuthenticationComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'signup', component: SignupComponent },
            { path: 'login', component: LoginComponent }
        ]
    }
];
