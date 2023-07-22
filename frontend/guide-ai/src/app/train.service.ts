import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainService {
  private token: string = sessionStorage.getItem('token') || '';
  private baseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  addTranscript(transcript: string): Observable<any> {
    const url = `${this.baseUrl}/train/add-transcript`;
    const body = {
      transcript,
    };
    return this.http.post(url, body, {
      headers: {
        Authorization: `${this.token}`,
      },
    });
  }

  addTranscriptFile(file: File): Observable<any> {
    const url = `${this.baseUrl}/train/add-transcript-file`;
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(url, formData, {
      headers: {
        Authorization: `${this.token}`,
      },
    });
  }

  getTranscripts(): Observable<any> {
    const url = `${this.baseUrl}/train/get-transcripts`;
    return this.http.get(url, {
      headers: {
        Authorization: `${this.token}`,
      },
    });
  }

  addQnA(question: string, answer: string): Observable<any> {
    const url = `${this.baseUrl}/train/add-qnas`;
    const body = {
      sample_question: question,
      sample_answer: answer,
    };
    return this.http.post(url, body, {
      headers: {
        Authorization: `${this.token}`,
      },
    });
  }

  addQnAFile(file: File): Observable<any> {
    const url = `${this.baseUrl}/train/add-qnas-file`;
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(url, formData, {
      headers: {
        Authorization: `${this.token}`,
      },
    });
  }

  getQnAs(): Observable<any> {
    const url = `${this.baseUrl}/train/get-qnas`;
    return this.http.get(url, {
      headers: {
        Authorization: `${this.token}`,
      },
    });
  }

  train(): Observable<any> {
    const url = `${this.baseUrl}/train`;
    return this.http.get(url, {
      headers: {
        Authorization: `${this.token}`,
      },
    });
  }

  // main function
  generateResponse(query: string): Observable<any> {
    const url = `${this.baseUrl}/train/generate-response`;
    const body = {
      query,
    };
    return this.http.post(url, body, {
      headers: {
        Authorization: `${this.token}`,
      },
    });
  }
}
