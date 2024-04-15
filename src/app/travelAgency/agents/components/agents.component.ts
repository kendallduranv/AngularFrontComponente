import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgentsService } from '../services/agents.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  form: FormGroup;
  dataList: any[] = [];
  displayedColumns: string[] = ['name', 'lastName1', 'lastName2', 'id'];

  constructor(private fb: FormBuilder, private agentsService: AgentsService) {
    // Inicializa el formulario utilizando FormBuilder
    this.form = this.fb.group({
      name: [''],
      lastName1: [''],
      lastName2: [''],
      id: ['']
    });
  }

  ngOnInit(): void {
    // Cunado se pone un metodo aca es una de la primeras cosas que se cargan cuando la pagina va entrando 
    this.loadData();
  }

  loadData() {
    // Cargar la informacion de la tabla 
    this.agentsService.getData().subscribe(data => {
      this.dataList = data;
    }, error => {
      console.error('Error fetching data: ', error);
    });
  }

  onSubmit() {

    this.agentsService.addData(this.form.value).subscribe(response => {
      console.log('Data added', response);
      this.loadData(); 
      this.form.reset();
    }, error => {
      console.error('Error adding data: ', error);
    });
  }

  onUpdate() {
    ;
    this.agentsService.updateData(this.form.value).subscribe(response => {
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
      this.agentsService.deleteData(id).subscribe(response => {
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
