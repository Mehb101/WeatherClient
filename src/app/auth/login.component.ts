import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    ReactiveFormsModule  
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.form = new FormGroup({
      userName : new FormControl("", Validators.required),
      password : new FormControl("", Validators.required)
    });
  }
 form! : UntypedFormGroup;
  onSubmit(){}
}
