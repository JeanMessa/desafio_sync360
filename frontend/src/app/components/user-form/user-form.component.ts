import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userForm!: FormGroup;
  imgProfile: File | null = null;

  constructor(){
    this.userForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      birthdate: new FormControl('',[Validators.required]),
      img_profile: new FormControl(''),
      street: new FormControl('',[Validators.required]),
      district: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      biography: new FormControl('',[Validators.required])
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imgProfile = input.files[0];
    } else {
      this.imgProfile = null;
    }
  }

  @Input() title:string = '';
  @Output() save = new EventEmitter();

  submit(){
    const data = new FormData();
    data.append('name',this.userForm.value.name);
    data.append('birthdate', this.userForm.value.birthdate);
    data.append('street', this.userForm.value.street);
    data.append('district', this.userForm.value.district);
    data.append('state', this.userForm.value.state);
    data.append('biography', this.userForm.value.biography);

    if(this.imgProfile){
      data.append('img_profile', this.imgProfile, this.imgProfile.name);
    }
    
    this.save.emit(data);
    this.userForm.reset();
  }
}
