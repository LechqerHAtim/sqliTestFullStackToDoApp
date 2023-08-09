import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandlRequetsService {


    private baseUrl = 'http://127.0.0.1:8000/tasks/';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createTask(taskObj: any): Observable<any> {
    return this.http.post(this.baseUrl, taskObj);
  }

  updateTask(taskId: number, updatedTaskObj: any): Observable<any> {
    
    return this.http.put(`${this.baseUrl}${taskId}/`, updatedTaskObj);
  }

  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${taskId}/`);
  }
    getTaskById(taskId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${taskId}/`);
  }
}
