import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  form: FormGroup;
  dataList: any[] = [];
  displayedColumns: string[] = ['description', 'price', 'id'];

  constructor(private fb: FormBuilder, private PackageService: PackageService) {
    // Inicializa el formulario utilizando FormBuilder
    this.form = this.fb.group({
      description: [''],
      price: [''],
      id: ['']
    });
  }

  ngOnInit(): void {
    // Cunado se pone un metodo aca es una de la primeras cosas que se cargan cuando la pagina va entrando 
    this.loadData();
  }

  loadData() {
    // Cargar la informacion de la tabla 
    this.PackageService.getData().subscribe(data => {
      this.dataList = data;
    }, error => {
      console.error('Error fetching data: ', error);
    });
  }

  onSubmit() {

    this.PackageService.addData(this.form.value).subscribe(response => {
      console.log('Data added', response);
      this.loadData(); 
      this.form.reset();
    }, error => {
      console.error('Error adding data: ', error);
    });
  }

  onUpdate() {
    ;
    this.PackageService.updateData(this.form.value).subscribe(response => {
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
      this.PackageService.deleteData(id).subscribe(response => {
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
