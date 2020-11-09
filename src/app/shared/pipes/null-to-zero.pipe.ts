import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullToZero'
})
export class NullToZeroPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'null') {
      value = '0'
    }
    return value
  }
}
