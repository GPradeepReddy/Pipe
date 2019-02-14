import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grdFilter'
})
export class GrdFilterPipe implements PipeTransform {
  debugger;
  transform(items: any, Instructors: string, Status: string, LocationAddress: string, StartDate: string, EndDate: string, SerachValue: string) {

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
        if (Status === "Completed") {
          if (item.Status === "Incompleted") {
            return false;
          }
        }
        if (LocationAddress && item.LocationAddress.toLowerCase().indexOf(LocationAddress.toLowerCase()) === -1) {
          return false;
        }

        let s = new Date(StartDate).getTime();
        let c = new Date(item.StartDate).getTime();

        if (StartDate && item.StartDate.toLowerCase().indexOf(StartDate.toLowerCase()) === -1 && s > c) {
          return false;
        }

        let e = new Date(EndDate).getTime();
        let d = new Date(item.EndDate).getTime();

        if (EndDate && item.EndDate.toLowerCase().indexOf(EndDate.toLowerCase()) === -1 && e < d) {
          return false;
        }


        if (SerachValue &&
          item.Instructors.toLowerCase().indexOf(SerachValue.toLowerCase()) === -1 &&
          item.Status.toLowerCase().indexOf(SerachValue.toLowerCase()) === -1 &&
          item.LocationAddress.toLowerCase().indexOf(SerachValue.toLowerCase()) === -1) {
          return false;
        }



        return true;
      })
    }


    else {
      debugger;
      return items;
    }


  }


}



