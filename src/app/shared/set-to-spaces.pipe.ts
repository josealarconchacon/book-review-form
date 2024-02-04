import { Pipe, PipeTransform } from '@angular/core';

// Pipe Decorator
@Pipe({
  name: 'setToSpaces',
})
export class SetToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    // replace specify character with a space
    return value.replace(character, ' ');
  }
}
