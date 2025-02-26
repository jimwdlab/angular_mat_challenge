import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormregComponent } from './formreg/formreg.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormregComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_mat_challenge';
}
