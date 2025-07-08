import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserFormComponent } from "../../components/user-form/user-form.component";
import { UserService } from '../../services/user.service';
import { User } from '../../types/User.type';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  imports: [UserFormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  id: string | null = null;
  user$!: Observable<User>;

  constructor(
    private route:ActivatedRoute,
    private userService:UserService,
    private toastService:ToastrService,
    private Router:Router
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      this.id = params.get('id');
      this.user$ = this.userService.get(this.id!);
    })
  }

  update(userData: FormData){
    this.userService.update(this.id!,userData).subscribe({
      next: () => {
        this.toastService.success("Edição realizada com sucesso."),
        this.Router.navigate(["/usuario/"+this.id])
      },
      error: () => this.toastService.error("Erro inesperado.")
    })
  }

}
