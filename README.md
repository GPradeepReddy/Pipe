# Pipe

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
For date Compare 


var d1 = new Date();
var d2 = new Date("12/30/2019");
var same = d1.getTime() >= d2.getTime();
console.log(same)





import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateFormatPipe',
})
export class dateFormatPipe implements PipeTransform {
    transform(value: string) {
       var datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'MMM-dd-yyyy');
        return value;
    }
}












var dates = ["09/09/2009", "16/07/2010", "29/01/2001"];
var min = dates[0];
for(var i = 1; i < dates.length; i++) {
  if (fDate(dates[i]) < fDate(min))
    min = dates[i];
}

alert(min);

// create a proper Date object from the string
function fDate(s) {
  var d = new Date();
  s = s.split('/');
  d.setFullYear(s[2]);
  d.setMonth(s[1]);
  d.setDate(s[0]);
  return d;
}
