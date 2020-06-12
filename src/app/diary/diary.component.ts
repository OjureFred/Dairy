import { Component, OnInit } from '@angular/core';
import { DiaryItem } from './../diary-item';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diaryItems: DiaryItem[] = [
    { id: 1, title: 'Finish Diary app', date: new Date(2020 / 6 / 12), startTime: '8 am', duration: 240 },
    { id: 2, title: 'Exercise', date: new Date(2020 / 6 / 12), startTime: '10 am', duration: 60 },
    { id: 3, title: 'Prepare plan for Quotes App', date: new Date(2020 / 6 / 13), startTime: '8 am', duration: 120 },
    { id: 4, title: 'View Video on Angular Directives', date: new Date(2020 / 6 / 14), startTime: '8 am', duration: 30 },
    { id: 5, title: 'Attend Service', date: new Date(2020 / 6 / 14), startTime: '10 am', duration: 240 }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
