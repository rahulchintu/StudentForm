import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  userForm : FormGroup;
  submitted = false;
  constructor(private  formBuilder : FormBuilder) { 
  
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({

      firstname: ['',[Validators.required]],
      lastname:['',[Validators.required]],
      branch :['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      dob : ['',[Validators.required]],
      gender : ['',[Validators.required]],
      date_of_joining:['',[Validators.required]],
      date_of_grad:['',Validators.required],
      cgpa:[,[Validators.required,Validators.max(10)]],
      address:['',[Validators.required]]

    })
  }
  formSubmit(){
    this.submitted = true;
    if(this.userForm.valid){
      console.log(this.userForm.value)
      alert("Form submitted successfully");
    }


  }
  get userFormControl(){
    return   this.userForm.controls;
  }

}
