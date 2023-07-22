import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRespComponent } from './generate-resp.component';

describe('GenerateRespComponent', () => {
  let component: GenerateRespComponent;
  let fixture: ComponentFixture<GenerateRespComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateRespComponent]
    });
    fixture = TestBed.createComponent(GenerateRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
