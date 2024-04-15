import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrlGet = 'http://localhost:8080/api/service/retrieveall'; // Reemplaza esto con la URL de tu API
  private apiUrlPost = 'http://localhost:8080/api/service/create'; // Reemplaza esto con la URL de tu API
  private apiUrlPut = 'http://localhost:8080/api/service/update'; // Reemplaza esto con la URL de tu API
  private apiUrlDelete = 'http://localhost:8080/api/service/delete'; // Reemplaza esto con la URL de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener datos
  public getData(): Observable<any> {
    ;
    return this.http.get(this.apiUrlGet);
  }

  // Método para agregar un nuevo registro
  public addData(data: any): Observable<any> {
    ;
    return this.http.post(this.apiUrlPost, data);
  }

  // Método para actualizar un nuevo registro
  public updateData(data: any): Observable<any> {
    ;
    return this.http.put(this.apiUrlPut, data);
  }

  // Método para borrar un nuevo registro
  public deleteData(id: string): Observable<any> {
    ;
    const url = `${this.apiUrlDelete}?id=${id}`; 
    return this.http.delete(url);
  }
}
