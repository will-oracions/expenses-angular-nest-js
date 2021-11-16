import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sharedSubstring',
})
export class SharedSubstringPipe implements PipeTransform {
  transform(value: string | undefined, length = 100): string {
    if (!value) {
      return '';
    }
    return `${value.trim().substr(0, length)}...`;
  }
}
