import { Component } from '@angular/core';
import { UserFormComponent } from "../../components/user-form/user-form.component";
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [UserFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userService:UserService,private toastService : ToastrService){}

  register(userData: FormData){
    this.userService.create(userData).subscribe({
      next: () => this.toastService.success("Cadastro realizado com sucesso."),
      error: () => this.toastService.error("Erro inesperado.")
    })
  }
}
