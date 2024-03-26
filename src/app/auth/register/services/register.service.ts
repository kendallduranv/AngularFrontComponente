import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrlGet = 'http://localhost:8080/api/client/retrieveall'; 
  private apiUrlPost = 'http://localhost:8080/api/client/create'; 
  private apiUrlPut = 'http://localhost:8080/api/client/update'; 
  private apiUrlDelete = 'http://localhost:8080/api/client/delete'; 

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
