import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryDetailFormComponent } from './diary-detail-form.component';

describe('DiaryDetailFormComponent', () => {
  let component: DiaryDetailFormComponent;
  let fixture: ComponentFixture<DiaryDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
