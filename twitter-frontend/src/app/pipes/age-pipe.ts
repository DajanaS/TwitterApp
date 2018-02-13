import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): string {
    const today = moment();
    const birth = moment(value);
    const years = today.diff(birth, 'years');

    return years + ' years';
  }

}
