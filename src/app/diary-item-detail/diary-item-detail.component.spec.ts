import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryItemDetailComponent } from './diary-item-detail.component';

describe('DiaryItemDetailComponent', () => {
  let component: DiaryItemDetailComponent;
  let fixture: ComponentFixture<DiaryItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
