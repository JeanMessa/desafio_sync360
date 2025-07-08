import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../types/User.type';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  imgProfile: File | null = null;
  editUser: User | null = null;
  @Input() title: string = '';
  @Input() editUser$!: Observable<User>;
  @Output() save = new EventEmitter();

  constructor(private toastService: ToastrService, private router: Router) {
    this.userForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      birthdate: new FormControl('',[Validators.required]),
      img_profile: new FormControl(''),
      street: new FormControl('',[Validators.required]),
      district: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      biography: new FormControl('',[Validators.required]),
      remove_img: new FormControl('')
    });
  }

  ngOnInit(): void {
    if (this.editUser$) {
      this.editUser$.subscribe({
        next: (data) => {
          if (data.id) {
            this.editUser = data;
            this.userForm.patchValue({
              name: this.editUser.name,
              birthdate: this.editUser.birthdate,
              street: this.editUser.street,
              district: this.editUser.district,
              state: this.editUser.state,
              biography: this.editUser.biography
            });

          } else {
            this.toastService.error("Erro ao carregar o usário");
            this.router.navigate(["/"]);
          }
        },
        error: () => {
          this.toastService.error("Erro ao carregar o usário");
          this.router.navigate(["/"]);
        }
      })
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imgProfile = input.files[0];
    } else {
      this.imgProfile = null;
    }
  }

  submit() {
    const data = new FormData();
    data.append('name', this.userForm.value.name);
    data.append('birthdate', this.userForm.value.birthdate);
    data.append('street', this.userForm.value.street);
    data.append('district', this.userForm.value.district);
    data.append('state', this.userForm.value.state);
    data.append('biography', this.userForm.value.biography);

    if(this.imgProfile){
      data.append('img_profile', this.imgProfile, this.imgProfile.name);
    }

    if(this.editUser$){
      data.append('remove_img', this.userForm.value.remove_img);
    }

    this.save.emit(data);
    this.userForm.reset();
  }
}
