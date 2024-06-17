import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent implements OnInit {

  form!:FormGroup

  ngOnInit(): void {

    this.form = new FormGroup({
      amount:new FormControl('',Validators.compose([  
        Validators.maxLength(6),
        Validators.pattern(/^([^0]|[1-2]\d{0,2})(\.\d{1,2})?$/),
        Validators.max(200)
      ]))
    }) 
  }

  get amount(){
    return this.form.controls['amount']
  }


  onSubmit =()=>{

    this.form.markAllAsTouched();
    alert("this is sparta!!!");
  }

  

}
