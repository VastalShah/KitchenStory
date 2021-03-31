import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  userForm!: FormGroup;
  formControls: any;
  formSubmitted!: boolean;
  pass: any;
  email: any;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      Email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
    this.formControls = this.userForm.controls;
  }

  handleEmail(event: any){
    this.email = event.target.value;
  }

  handlePassword(event: any){
    this.pass = event.target.value;
  }

  handleFormData(){
    this.formSubmitted = true;
    if(this.userForm.invalid){
      console.log("Form not submited");
      return;
    } else{
        if((sessionStorage.getItem("email") == "admin@gmail.com" || this.email == "admin@gmail.com") && (sessionStorage.getItem("password") == "admin@123" || this.pass == "admin@123")){
          this.router.navigate(['/admin']);
        }
        else if(sessionStorage.getItem("email") == this.email && sessionStorage.getItem("password") == this.pass){
          this.router.navigate(['/home']);
        }else{
          alert("Username or password do not match");
        }
    }
  }

}
