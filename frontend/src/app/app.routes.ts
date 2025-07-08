import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './pages/users/users.component';


export const routes: Routes = [
    {
        path : "cadastro",
        component: RegisterComponent
    },
    {
        path: "",
        component: UsersComponent
    }
];
