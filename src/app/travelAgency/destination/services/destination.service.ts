import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private apiUrlGet = 'http://localhost:8080/api/destination/retrieveall'; 
  private apiUrlPost = 'http://localhost:8080/api/destination/create'; 
  private apiUrlPut = 'http://localhost:8080/api/destination/update'; 
  private apiUrlDelete = 'http://localhost:8080/api/destination/delete'; 

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
