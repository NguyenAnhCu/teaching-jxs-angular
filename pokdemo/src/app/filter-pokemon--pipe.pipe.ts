import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(value: any[], property?: string, searchString?: string): any {
    if(searchString === undefined){
      return value;
    }
    if (typeof value !== 'undefined') {
      return value.filter((e) => {
        const propertyValue:string = e[property];
        return (propertyValue !== undefined) && e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }
}
