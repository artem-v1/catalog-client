import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charTransformPipe',
  standalone: true
})
export class CharTransformPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
