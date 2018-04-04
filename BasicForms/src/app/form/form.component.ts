import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ServiceService } from "../service.service";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder,private service : ServiceService) { }
  form: FormGroup;
  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      email1: ['', [Validators.required,Validators.email]],
      text: ['', Validators.required],
      subject: ['angular', Validators.required],
    });
  }
  SubmitForm(data) {
   this.service.sendMail(data).subscribe(res=>{
     if(res['code']=='200'){
      alert('success');
      this.form.reset();
     }else{
       alert(res['message']['response']);
     }
   });
  }
}
