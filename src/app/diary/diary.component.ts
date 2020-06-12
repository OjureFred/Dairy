import { Component, OnInit } from '@angular/core';
import { DiaryItem } from './../diary-item';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diaryItems: DiaryItem[] = [
    new DiaryItem(1, 'Finish Diary app', new Date(2020 / 6/ 12), '8 am',240),
    new DiaryItem(2, 'Exercise', new Date(2020 / 6/ 12), '10 am', 60),
    new DiaryItem(3, 'Prepare plan for Quotes App', new Date(2020 / 6 / 13), '8 am', 120),
    new DiaryItem(4, 'View Video on Angular Directives', new Date(2020 / 6 / 14), '8 am', 30),
    new DiaryItem(5, 'Attend Service', new Date(2020 / 6 / 14), '10 am', 240)
  ];

  toggleDetails(index) {
    this.diaryItems[index].showDetails = !this.diaryItems[index].showDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
 