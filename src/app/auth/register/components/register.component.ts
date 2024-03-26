import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  // @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
    ) {

    // Inicializa el formulario utilizando FormBuilder
    this.form = this.fb.group({
      id: [''],
      name: [''],
      lastName1: [''],
      lastName2: [''],
      clientIdentification: [''],
      phone: [''],
      email: [''],
      birthDate: new Date(),
      nationality: [''],
      gender: [''],
      zipCode: [''],
      password: [''],
      role: [''],
    });
  }

  ngOnInit(): void {
  }



  onSubmit() {

    debugger

    const formValue = { ...this.form.value };

    if (formValue.birthdate) {
      formValue.birthdate = formValue.birthdate.toISOString().split('T')[0];
    }

    console.log(JSON.stringify(formValue));

  
    this.registerService.addData(this.form.value).subscribe(response=>{
      this.form.reset();
      this.router.navigate(['/auth/login']);

    }
    , error => {
      console.error('Error adding data: ', error);
    });

    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

}
