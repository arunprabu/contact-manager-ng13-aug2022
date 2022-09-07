import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis' // name of the pipe 
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    console.log(value);
    console.log(args);

    if(value.length > 0){
      value = value.substring(0, args[0]);
      return value + '...';
    }else{
      return value;
    }
    
  }

}
