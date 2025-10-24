import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateGlobalization'
})
export class DateGlobalizationPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (!value) return value;
    let locale: string = args[0] ? args[0] : 'en-IN';
    return new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(new Date(value));
  }

}
