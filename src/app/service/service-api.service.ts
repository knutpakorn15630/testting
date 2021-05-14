import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReqDataQuestion, ResDataQuestion, ResShowQuestion } from '../interface-api/interface-showquestion';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  apiUrl = environment.httpApi;

  constructor(private httpApiClient: HttpClient) { }

  public showQuestion(id: number): Observable<ResShowQuestion> {
    return this.httpApiClient.get<ResShowQuestion>(`${this.apiUrl}/api/main/getForm/${id}`);
  }

  public getCheckQuestion(body: ReqDataQuestion): Observable<ResDataQuestion> {
    return this.httpApiClient.post<ResDataQuestion>(`${this.apiUrl}/api/answer/check`, body);
  }
}