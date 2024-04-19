import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  form: FormGroup;
  dataList: any[] = [];
  displayedColumns: string[] = ['airport', 'city', 'country', 'id'];

  constructor(private fb: FormBuilder, private DestinationService: DestinationService) {
    // Inicializa el formulario utilizando FormBuilder
    this.form = this.fb.group({
      airport: [''],
      city: [''],
      country: [''],
      id: ['']
    });
  }

  ngOnInit(): void {
    // Cunado se pone un metodo aca es una de la primeras cosas que se cargan cuando la pagina va entrando 
    this.loadData();
  }

  loadData() {
    // Cargar la informacion de la tabla 
    this.DestinationService.getData().subscribe(data => {
      this.dataList = data;
    }, error => {
      console.error('Error fetching data: ', error);
    });
  }

  onSubmit() {

    this.DestinationService.addData(this.form.value).subscribe(response => {
      console.log('Data added', response);
      this.loadData(); 
      this.form.reset();
    }, error => {
      console.error('Error adding data: ', error);
    });
  }

  onUpdate() {
    ;
    this.DestinationService.updateData(this.form.value).subscribe(response => {
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
      this.DestinationService.deleteData(id).subscribe(response => {
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
