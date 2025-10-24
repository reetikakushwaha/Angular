import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowecaseTrunc'
})
export class LowecaseTruncPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (typeof(value) === 'string') {
      return value.toLowerCase().substring(0, 4);
    }
    return value;
  }

}
