import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinutesToHoursPipe implements PipeTransform {

  transform(value: any): number {
    let hours = value / 60;
    return hours;
  }

}
