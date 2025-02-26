import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatSliderModule } from '@angular/material/slider'; 
import { MatRadioModule } from '@angular/material/radio'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-formreg',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule
  ],
  templateUrl: './formreg.component.html',
  styleUrl: './formreg.component.css'
})
export class FormregComponent {
  name: string = '';
  userName: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;

  formdata: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required, Validators.pattern('^(0[1-6]|[5-9]\d)$')]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),
    userName: new FormControl('', [Validators.required]),
  });

  onClickSubmit(data: { 
    userName: string; 
    email: string; 
    password: string; 
    gender: string; 
    address: string; 
    birthDate: Date; 
    angularSkillLevel: number; 
    name: string;
    phone: string;
  })
  {
    this.submitted = true; 
    this.userName = data.userName; 
    this.email = data.email; 
    this.password = data.password; 
    this.gender = data.gender; 
    this.address = data.address; 
    this.angularSkillLevel = data.angularSkillLevel; 
    this.birthDate = data.birthDate; 
    this.name = data.name
    this.phone = data.phone;
    
    if (this.formdata.valid) { 
      console.log("Form Submitted!", this.formdata.value); 
    } else { 
      console.log('Form is not valid!'); 
    }
  };
}
