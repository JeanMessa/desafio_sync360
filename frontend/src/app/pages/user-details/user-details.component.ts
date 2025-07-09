import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../../types/User.type';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  id: string | null = null;
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private toastService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.userService.get(this.id!).subscribe({
        next: (data: User) => {
          if (data.id) {
            this.user = data;
            console.log(data);
          } else {
            this.toastService.error("Erro ao carregar o usário");
            this.router.navigate(["/"]);
          }
        },
        error: () => {
          this.toastService.error("Erro ao carregar o usário");
          this.router.navigate(["/"]);
        }
      });
    })
  }

  calcAge(birthdate: Date) {
    return this.userService.calcAge(birthdate);
  }

  getStateName(acronym: string) {
    switch (acronym.toUpperCase()) {
      case 'AC':
        return 'Acre';
      case 'AL':
        return 'Alagoas';
      case 'AP':
        return 'Amapá';
      case 'AM':
        return 'Amazonas';
      case 'BA':
        return 'Bahia';
      case 'CE':
        return 'Ceará';
      case 'DF':
        return 'Distrito Federal';
      case 'ES':
        return 'Espírito Santo';
      case 'GO':
        return 'Goiás';
      case 'MA':
        return 'Maranhão';
      case 'MT':
        return 'Mato Grosso';
      case 'MS':
        return 'Mato Grosso do Sul';
      case 'MG':
        return 'Minas Gerais';
      case 'PA':
        return 'Pará';
      case 'PB':
        return 'Paraíba';
      case 'PR':
        return 'Paraná';
      case 'PE':
        return 'Pernambuco';
      case 'PI':
        return 'Piauí';
      case 'RJ':
        return 'Rio de Janeiro';
      case 'RN':
        return 'Rio Grande do Norte';
      case 'RS':
        return 'Rio Grande do Sul';
      case 'RO':
        return 'Rondônia';
      case 'RR':
        return 'Roraima';
      case 'SC':
        return 'Santa Catarina';
      case 'SP':
        return 'São Paulo';
      case 'SE':
        return 'Sergipe';
      case 'TO':
        return 'Tocantins';
      default:
        return acronym;
    }
  }

  edit(id: number) {
    this.router.navigate(["/editar/" + id]);
  }

  delete(id: number) {
    if (confirm("Tem certeza que deseja excluir esse usuário?")) {
      this.userService.delete(id).subscribe({
        next: (data) => {
          if (data.success) {
            this.toastService.success("Usuário excluido com sucesso");
            this.router.navigate(["/"]);
          } else {
            this.toastService.error("Erro ao excluir");
          }
        },
        error: () => this.toastService.error("Erro ao excluir")
      });
    }
  }

}
