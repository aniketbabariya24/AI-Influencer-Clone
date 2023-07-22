import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-generate-resp',
  templateUrl: './generate-resp.component.html',
  styleUrls: ['./generate-resp.component.scss'],
})
export class GenerateRespComponent implements OnInit {
  private influencer: any = {};

  protected response: HTMLDivElement | null = null;

  protected fetchedQnAs: any = [];

  protected selectedTranscFile: File | null = null;
  protected selectedQnAFile: File | null = null;

  protected queryForm: any = {
    query: '',
  };

  constructor(
    private apiAuthserv: AuthService,
    private apiTrainServ: TrainService
  ) {}

  resizeTextarea(event: any) {
    // increase the top-margin of the sibling button of textarea
    if (event.target.value.length == 0) {
      event.target.style.height = 'auto';
      event.target.nextElementSibling.style.marginTop = '0px';
      return;
    }
    if (event.target.scrollHeight > 150) {
      event.target.style.overflowY = 'scroll';
      event.target.nextElementSibling.style.marginTop = '100px';
      return;
    }
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
    event.target.nextElementSibling.style.marginTop =
      event.target.scrollHeight / 2 + 'px';
  }

  onFileSelected(event: any, type: string) {
    if (type == 'transcript') {
      this.selectedTranscFile = event.target.files[0];
    } else {
      this.selectedQnAFile = event.target.files[0];
    }
  }

  sendTrascriptFile() {
    if (!this.selectedTranscFile) {
      alert('Please select a file');
      return;
    }
    this.apiTrainServ.addTranscriptFile(this.selectedTranscFile).subscribe(
      (res) => {
        if (res.status == 'success') {
          console.log(res);
        } else {
          console.log(res);
        }
      },
      (err) => {
        console.log(err.error.message);
      }
    );
  }

  sendQnAFile() {
    if (!this.selectedQnAFile) {
      alert('Please select a file');
      return;
    }
    this.apiTrainServ.addQnAFile(this.selectedQnAFile).subscribe(
      (res) => {
        if (res.status == 'success') {
          console.log(res);
        } else {
          console.log(res);
        }
      },
      (err) => {
        console.log(err.error.message);
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

    this.apiTrainServ.getQnAs().subscribe(
      (res) => {
        if (res.status == 'success') {
          this.fetchedQnAs = res.data;
          console.log(res);
        } else {
          console.log(res);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // main function to generate response
  genRes() {
    this.response = document.querySelector('#response');
    if (this.queryForm.query.length == 0) {
      alert('Please enter a query');
      return;
    }

    const userP = document.createElement('p');
    userP.innerHTML = 'Q:' + this.queryForm.query;
    userP.style.padding = '10px';
    userP.style.borderRadius = '5px';
    this.response?.appendChild(userP);

    this.apiTrainServ.generateResponse(this.queryForm.query).subscribe(
      (res) => {
        if (res.status == 'success') {
          this.queryForm.query = '';
          const textarea = document.querySelector(
            '#query'
          ) as HTMLTextAreaElement;
          textarea.style.height = 'auto';

          // create p element and append to response div
          const p = document.createElement('p');
          p.innerHTML = res.data;
          p.style.width = '100%';
          p.style.backgroundColor = '#f5f5f5';
          p.style.padding = '10px';
          p.style.borderRadius = '5px';
          p.style.color = '#000';
          p.style.margin = '10px 0px';
          this.response?.appendChild(p);
        } else {
          console.log(res);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
