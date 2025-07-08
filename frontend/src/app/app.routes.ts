import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './pages/users/users.component';
import { EditComponent } from './pages/edit/edit.component';


export const routes: Routes = [
    {
        path : "cadastro",
        component: RegisterComponent
    },
    {
        path: "",
        component: UsersComponent
    },{
        path: "editar/:id",
        component:  EditComponent
    }
];
