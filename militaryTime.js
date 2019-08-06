function toMilitary (time) {
    //created var to test AM
    var AM = time.match('AM') ? true : false
    
    //spilt my time into an array
    var time = time.split(':');
    console.log(time)
    
    //first element is hours
    var hours = time[0];//hours 
    console.log(time[0])
    
    //second element is broken into single elements 
    time = time[1].split(''); 
    console.log(time)
    
    //created mins by removing AM || PM
    var mins = time.splice(0,2).join('');     //minutes
    console.log(mins)
    
    //created var to make AM || PM || not specified 
    var dayNight = time.join('');       // "am" or "pm" or ""
    
    //console logged to see all vars worked as expected
    console.log(hours, mins, dayNight)
    
    // check if AM or not specified
    if (dayNight === 'AM' || !dayNight ) {
      //console.log(hours)
    hours = parseInt(hours) === 12 ? '00' : hours;
      //console.log(hours)
  } else {
    if (parseInt(hours) !== 12)
      //console.log(hours)
      hours = parseInt(hours) + 12 + '';
      //console.log(hours)
  }
    hours = (hours.length === 1) ? "0" + hours : hours ;
    //console.log(hours)
  return hours + ':' + mins;
}


console.log(toMilitary('12:00AM'));//=>'00:00'
console.log(toMilitary('7:47PM')); //=>'19:47'
console.log(toMilitary('12:01AM'));//=>'00:01'
console.log(toMilitary('9:15AM')); //=>'09:15'
console.log(toMilitary('1:23AM')); //=>'01:23'
console.log(toMilitary('3:00PM')); //=>'15:00'
console.log(toMilitary('12:00PM'));//=>'12:00'
console.log(toMilitary('04:00'));  //=>'04:00'

// console.log(`Test1 expected ${toMilitary('12:00am')} to be 00:00`);
// console.log(`Test2 expected ${toMilitary('7:47pm')} to be 19:47`);
// console.log(`Test3 expected ${toMilitary('12:01am')} to be 00:01`);
// console.log(`Test4 expected ${toMilitary('9:15am')} to be 09:15`);
// console.log(`Test5 expected ${toMilitary('1:23am')} to be 01:23`);
// console.log(`Test6 expected ${toMilitary('3:00pm')} to be 15:00`);
// console.log(`Test7 expected ${toMilitary('12:00pm')} to be 12:00`);
// console.log(`Test8 expected ${toMilitary('04:00')} to be 04:00`);