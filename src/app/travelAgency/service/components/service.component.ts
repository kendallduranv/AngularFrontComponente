import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  form: FormGroup;
  dataList: any[] = [];
  displayedColumns: string[] = ['description', 'serviceName', 'priceUSD', 'id'];

  constructor(private fb: FormBuilder, private ServiceService: ServiceService) {
    // Inicializa el formulario utilizando FormBuilder
    this.form = this.fb.group({
      description: [''],
      serviceName: [''],
      priceUSD: [''],
      id: ['']
    });
  }

  ngOnInit(): void {
    // Cunado se pone un metodo aca es una de la primeras cosas que se cargan cuando la pagina va entrando 
    this.loadData();
  }

  loadData() {
    // Cargar la informacion de la tabla 
    this.ServiceService.getData().subscribe(data => {
      this.dataList = data;
    }, error => {
      console.error('Error fetching data: ', error);
    });
  }

  onSubmit() {

    this.ServiceService.addData(this.form.value).subscribe(response => {
      console.log('Data added', response);
      this.loadData(); 
      this.form.reset();
    }, error => {
      console.error('Error adding data: ', error);
    });
  }

  onUpdate() {
    ;
    this.ServiceService.updateData(this.form.value).subscribe(response => {
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
      this.ServiceService.deleteData(id).subscribe(response => {
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
