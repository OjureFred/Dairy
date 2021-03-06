import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DiaryItem } from './../diary-item';

@Component({
  selector: 'app-diary-item-detail',
  templateUrl: './diary-item-detail.component.html',
  styleUrls: ['./diary-item-detail.component.css']
})
export class DiaryItemDetailComponent implements OnInit {

  @Input() diaryItem: DiaryItem;
  @Output() isComplete = new EventEmitter<boolean>();

  itemComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
