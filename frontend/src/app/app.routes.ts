import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './pages/users/users.component';
import { EditComponent } from './pages/edit/edit.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';


export const routes: Routes = [
    {
        path : "cadastro",
        component: RegisterComponent
    },
    {
        path: "",
        component: UsersComponent
    },
    {
        path: "usuario/:id",
        component: UserDetailsComponent
    },
    {
        path: "editar/:id",
        component:  EditComponent
    }
];
