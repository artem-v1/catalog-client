import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charCategoryTransformPipe',
  standalone: true
})
export class CharCategoryTransformPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
