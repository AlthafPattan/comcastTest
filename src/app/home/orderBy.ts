
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({  name: 'orderBy' })
export class OrderPipe implements PipeTransform {

  transform(records: Array<any>, args?: any): any {
    if (records !== undefined) {
      return records.sort(function(a, b){
        if(a[args.col] < b[args.col]){
          return -1 * args.dir;
        }
        else if( a[args.col] > b[args.col]){
          return 1 * args.dir;
        }
        else{
          return 0;
        }
      });
    } else {
      return records;
    }
  };
}
