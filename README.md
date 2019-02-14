# Pipe

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
For date Compare 

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
