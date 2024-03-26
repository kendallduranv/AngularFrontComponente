import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {
  private apiUrlGet = 'http://localhost:8080/api/agent/retrieveall'; // Reemplaza esto con la URL de tu API
  private apiUrlPost = 'http://localhost:8080/api/agent/create'; // Reemplaza esto con la URL de tu API
  private apiUrlPut = 'http://localhost:8080/api/agent/update'; // Reemplaza esto con la URL de tu API
  private apiUrlDelete = 'http://localhost:8080/api/agent/delete'; // Reemplaza esto con la URL de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener datos
  public getData(): Observable<any> {
    debugger;
    return this.http.get(this.apiUrlGet);
  }

  // Método para agregar un nuevo registro
  public addData(data: any): Observable<any> {
    debugger;
    return this.http.post(this.apiUrlPost, data);
  }

  // Método para actualizar un nuevo registro
  public updateData(data: any): Observable<any> {
    debugger;
    return this.http.put(this.apiUrlPut, data);
  }

  // Método para borrar un nuevo registro
  public deleteData(id: string): Observable<any> {
    debugger;
    const url = `${this.apiUrlDelete}?id=${id}`; 
    return this.http.delete(url);
  }
}
