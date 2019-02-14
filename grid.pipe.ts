import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridFilter'
})
export class GridFilterPipe implements PipeTransform {

  transform(items: any, Instructors: string, Status: string, Location: string, StartDate: string, EndDate: string) {

    debugger;
    if (items && items.length) {
      debugger;
      return items.filter(item => {
        debugger;
        if (Instructors && item.Instructors.toLowerCase().indexOf(Instructors.toLowerCase()) === -1) {
          return false;
        }
        debugger;
        if (Status && item.Status.toUpperCase().indexOf(Status.toUpperCase()) === -1) {
          return false;
        }
        if (Location && item.Location.toLowerCase().indexOf(Location.toLowerCase()) === -1) {
          return false;
        }
        if (StartDate && item.StartDate.toLowerCase().indexOf(StartDate.toLowerCase()) === -1) {
          return false;
        }
        if (EndDate && item.EndDate.toLowerCase().indexOf(EndDate.toLowerCase()) === -1) {
          return false;
        }
        debugger;

        return true;
      })
    }




    else {
      debugger;
      return items;
    }


  }

}
