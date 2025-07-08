import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../types/User.type';
import { UserService } from '../../services/user.service';
import { AsyncPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit{
  users$! :Observable<User[]>;

  constructor(private userService: UserService,private toastService:ToastrService,private router:Router){}

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.users$ = this.userService.getAll();
  }

  calcAge(birthdate: Date){
    return this.userService.calcAge(birthdate);
  }

  edit(id: number){
    this.router.navigate(["/editar/"+id]);
  }

  delete(id:number){
    if(confirm("Tem certeza que deseja excluir esse usuário?")){
      this.userService.delete(id).subscribe({
        next: (data) => {
          if(data.success){
            this.toastService.success("Usuário excluido com sucesso");
            this.list();
          }else{
            this.toastService.error("Erro ao excluir");
          }
        } ,
        error: () => this.toastService.error("Erro ao excluir")
      });
    }
  }


}
