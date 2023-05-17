const nowadays = Date.now();
console.log(nowadays);
const date = new Date("2003-07-14 22:00:00");
//const date = new Date(nowadays);
const hour = document.querySelector('#hour');
let dateText;
let hourText;

function getDayOfWeek(week){
    switch (week) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';    
        default:
            break;
    }
}
function getMonth(month){
    switch (month) {
        case 0:
          return 'January';
        case 1:
          return 'February';
        case 2:
          return 'March';
        case 3:
          return 'April';
        case 4:
          return 'May';
        case 5:
          return 'June';
        case 6:
          return 'July';
        case 7:
          return 'August';
        case 8:
          return 'September';
        case 9:
          return 'October';
        case 10:
          return 'November';
        case 11:
          return 'December';
        default:
          return 'Invalid month';
      }
}

dateText = `${getDayOfWeek(date.getDay())}, ${getMonth(date.getMonth())} ${(date.getDate())}th of  ${date.getFullYear()}`;
hourText = `${date.getHours()} hours, ${date.getMinutes()} minutes and ${date.getSeconds()} seconds`;
hour.innerHTML = `${dateText}<br />${hourText}`;

if (date.getHours() > 5 && date.getHours() <= 6 || date.getHours() > 17 && date.getHours() <= 18) {
    document.body.style.background = 'rgb(253, 208, 59)';
} else if (date.getHours() > 6 && date.getHours() <= 17) {
    document.body.style.background = 'rgb(65, 149, 228)';
} else if (date.getHours() > 18 && date.getHours() <= 24 || date.getHours() >= 0 && date.getHours() <= 5) {
    document.body.style.background = 'rgb(6, 48, 87)';
} else {
    document.body.style.background = 'black';
}