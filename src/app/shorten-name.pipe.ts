import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenName'
})
export class ShortenNamePipe implements PipeTransform {

  transform(value: string, maximum: number, filler: string): string {
    let newValue = value;
    if (newValue.length > maximum) {
      newValue = newValue.substring(0, maximum - filler.length);
      newValue = newValue.concat(filler);
    }
    return newValue;
  }

}
