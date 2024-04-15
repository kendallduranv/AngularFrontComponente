import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  form: FormGroup;
  dataList: any[] = [];
  displayedColumns: string[] = ['name', 'clientIdentification', 'gender', 'phone','zipCode','email','lastName2','nationality','lastName1','birthDate','id'];

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Inicializa el formulario utilizando FormBuilder
    this.form = this.fb.group({
      name: [''],
      clientIdentification: [''],
      gender: [''],
      phone: [''],
      zipCode: [''],
      email: [''],
      lastName2: [''],
      nationality: [''],
      lastName1: [''],
      birthDate: [''],
      id: ['']
    });
  }

  ngOnInit(): void {
    // Cunado se pone un metodo aca es una de la primeras cosas que se cargan cuando la pagina va entrando 
    this.loadData();
  }

  loadData() {
    // Cargar la informacion de la tabla 
    this.clientService.getData().subscribe(data => {
      this.dataList = data;
    }, error => {
      console.error('Error fetching data: ', error);
    });
  }

  onSubmit() {

    this.clientService.addData(this.form.value).subscribe(response => {
      console.log('Data added', response);
      this.loadData(); 
      this.form.reset();
    }, error => {
      console.error('Error adding data: ', error);
    });
  }

  onUpdate() {
    ;
    this.clientService.updateData(this.form.value).subscribe(response => {
      console.log('Data updated', response);
      this.loadData();
      this.form.reset();
    }, error => {
      console.error('Error adding data: ', error);
    });
  }

  onDelete() {
    const id = this.form.value.id; 
    if (id) {
      this.clientService.deleteData(id).subscribe(response => {
        console.log('Data deleted', response);
        this.loadData(); 
        this.form.reset(); 
      }, error => {
        console.error('Error deleting data: ', error);
      });
    } else {
      console.error('ID is required for deletion');
    }
  }
  
  
}
