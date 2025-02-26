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
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


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
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './formreg.component.html',
  styleUrl: './formreg.component.css'
})
export class FormregComponent {
  isDark: boolean = false;

  toggleDarkMode() {
    this.isDark = !this.isDark;
    document.body.style.backgroundColor = this.isDark ? "#121212" : "#f5f5f5";
    document.body.style.color = this.isDark ? "white" : "black";
  }

  static readonly darkStyleName = 'darkMode';
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
  prefMedium: string = '';
  // maxDate: string = 'yyyy-MM-dd';
  // startDate: string = '';
  // endDate: string = '';
  // maxDate: string  = '';


  formdata: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),
    userName: new FormControl('', [Validators.required]),
    prefMedium: new FormControl('', [Validators.required])
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
    prefMedium: string;
    maxDate: string;
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
    this.prefMedium = data.prefMedium;
    
    if (this.formdata.valid) { 
      console.log("Form Submitted!", this.formdata.value); 
    } else { 
      console.log('Form is not valid!'); 
    }
  };
}
