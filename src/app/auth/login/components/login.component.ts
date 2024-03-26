import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
  
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
    ) {

    // Inicializa el formulario utilizando FormBuilder
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
  }



  onSubmit() {
    const formValue = { ...this.form.value };
    console.log(JSON.stringify(formValue));

    this.loginService.addData(this.form.value).subscribe(credentials=>{
      this.form.reset();
      debugger;

      if(credentials.name!==null){
        this.router.navigate(['/travelAgency/service']);
      }else {
        Swal.fire({
          icon: "error",
          title: "Crendenciales equivocadas",
          text: "No coinciden las credenciales",
        });
      }
    }, error => {
      console.error('Error login: ', error);
    })

    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }




}
  

