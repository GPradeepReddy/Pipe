import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grdFilter'
})
export class GrdFilterPipe implements PipeTransform {
  debugger;
  transform(items: any, Instructors: string, Status: string, LocationAddress: string, StartDate: string, EndDate: string, SearchValue: string) {

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

        if (SearchValue != undefined && SearchValue != null && SearchValue != "") {

          if (item.Instructors.toLowerCase().indexOf(SearchValue.toLowerCase()) === -1 &&
            item.Status.toLowerCase().indexOf(SearchValue.toLowerCase()) === -1 &&
            item.LocationAddress.toLowerCase().indexOf(SearchValue.toLowerCase()) === -1 &&
            item.Title.toLowerCase().indexOf(SearchValue.toLowerCase()) === -1) {
            return false;
          }

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



