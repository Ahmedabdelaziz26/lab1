import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat',
})
export class CreditCardFormatPipe implements PipeTransform {
  transform(value: string): string {
    const formattedValue: string[] = [];
    let count = 0;
    for (let char of value) {
      if (count === 4) {
        formattedValue.push('-');
        count = 0;
      }
      formattedValue.push(char);
      count++;
      // console.log(formattedValue.length);
    }
    return formattedValue.join('');
  }
}
// 1111222233334444
