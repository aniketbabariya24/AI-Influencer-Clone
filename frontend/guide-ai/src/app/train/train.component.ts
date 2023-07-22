import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TrainService } from '../train.service';
interface QnA {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss'],
})
export class TrainComponent implements OnInit {
  private token: string = sessionStorage.getItem('token') || '';

  private influencer: any = {};

  protected transcript: string = '';

  protected qnaForm: QnA = {
    question: '',
    answer: '',
  };
  constructor(
    private apiAuthserv: AuthService,
    private apiTrainSeve: TrainService
  ) {}

  addTranscript(): void {
    if (this.transcript == '') {
      alert('Please enter a transcript');
      return;
    }
    this.apiTrainSeve.addTranscript(this.transcript).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addQnA(): void {
    if (this.qnaForm.question == '' || this.qnaForm.answer == '') {
      alert('Please fill in both question and answer');
      return;
    }

    this.apiTrainSeve
      .addQnA(this.qnaForm.question, this.qnaForm.answer)
      .subscribe(
        (res) => {
          console.log(res);
          this.qnaForm.question = '';
          this.qnaForm.answer = '';
        },
        (err) => {
          console.log(err);
          this.qnaForm.question = '';
          this.qnaForm.answer = '';
        }
      );
  }

  train(): void {
    this.apiTrainSeve.train().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.apiAuthserv.getInfluencer().subscribe(
      (res) => {
        if (res.status == 'success') {
          this.influencer = res.data;
          sessionStorage.setItem('influencer_name', this.influencer.name);
        } else {
          sessionStorage.removeItem('token');
          window.location.href = '/home';
        }
      },
      (err) => {
        sessionStorage.removeItem('token');
        window.location.href = '/home';
      }
    );
  }
}
