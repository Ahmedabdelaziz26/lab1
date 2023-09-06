import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, precenage: number = 30): number {
    let dis = precenage / 100;
    let disCalc = value * dis;
    let fivalValue = value - disCalc;

    return fivalValue;
  }
}
