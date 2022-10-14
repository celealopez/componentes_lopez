import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanSiNo'
})
export class BooleanSiNoPipe implements PipeTransform {

  transform(value: boolean, ...args: string[]): string { {
    if (value){
      return args[0];
    }else{
      return args[1];
    }
    
  }
}
}
