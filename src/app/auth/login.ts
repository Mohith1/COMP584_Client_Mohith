import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth-service';
import { LoginRequest } from './login-request';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
form!: UntypedFormGroup;
constructor(private authService: AuthService) {}
ngOnInit(): void {
  // Initialize the form here
 this.form = new UntypedFormGroup({
  // Define form controls here
  username: new FormControl('',Validators.required),
  password: new FormControl('', Validators.required)
 });
}
onSubmit():void {
    let loginrequest = <LoginRequest>{
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value
    };
    this.authService.login(loginrequest).subscribe({
      next: (result) => {
        console.log('Login successful', result);
      },
      error: (result)=> {
        console.error('Login failed', result);
      }
    })
}
}
