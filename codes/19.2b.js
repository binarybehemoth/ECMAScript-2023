if ( Object.prototype.toString.call(d) === "[object Date]" ) {
  // it is a date
  if ( isNaN( d.getTime() ) ) {  // d.valueOf() could also work
    // date is not valid
  }
  else {
    // date is valid
  }
}
else {
  // not a date
}
