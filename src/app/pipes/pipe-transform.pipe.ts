import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerCaseCustom'
})
export class LoweCaseCustomPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.toLowerCase();
  }

}