"use strict";

/*
   

   Author: 
   Date:  

   Filename:   lht_calendar.js  

   */

//set the date displayed in the calendar
var thisDay = new Date();

//write the calendar to the element with id "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//function to generate the calendar table
function createCalendar(calDate) {
   var calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}

//Function to write the calendar caption
function calCaption(calDate) {
   //monthName = array contains the list of month names
   var monthName = ["January", "February", "March", "April", 
   "May", "June", "July", "August", "September", "October", 
   "November", "December"];

   //determine the current month
   var thisMonth = calDate.getMonth();

   //determine the current year
   var thisYear = calDate.getFullYear();

   //write the caption
   return "<caption>" + "24 Carrot Kitchen Recipes for the Month of:" + "<br />" + monthName[thisMonth] + " " + thisYear
   + "</caption>";   
}

/*function to write a table row of weekday abbreviations*/
function calWeekdayRow() {
   //array of weekday abbreviations
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML = "<tr>";

   //loop through the dayName array
   for (var i = 0; i < dayName.length; i++) {
      rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>"; 
   } //for close loop

   rowHTML += "</tr>";
   return rowHTML;
} //function close

/*function to calculate the number of days in the month */
function daysInMonth(calDate) {
   //array of days in each month
   var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   //extract the four digit year and month value
   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

   //revise the days in February for leap years
   if (thisYear % 4 === 0) {
      if ((thisYear % 100 != 0) || (thisYear % 400 ===0))
         {dayCount[1] = 29;
         }
   }   

   //return number of days for current month
   return dayCount[thisMonth];
}

//function to write table rows for each month day
function calDays(calDate) {
   //determine the starting day of month
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   var weekDay = day.getDay();

   //write blank cells preceeding the starting day
   var htmlCode = "<tr>";
   for (var i = 0; i < weekDay; i++) {
      htmlCode += "<td></td>";
   }
   
   //write cells for each day of month
   var totalDays = daysInMonth(calDate);
   var highlightDay = calDate.getDate();
   for (var i = 1; i <= totalDays; i++) {
      day.setDate(i);
      weekDay = day.getDay();
      
      if (weekDay === 0) htmlCode += "<tr>";
      //the next statement was in as orig statement but then replaced
      //htmlCode += "<td class='calendar_dates'>" + i + "</td>";

      if (i === highlightDay) {
         htmlCode += "<td class='calendar_dates' id = 'calendar_today'>" + i + dayRecipe[i] + "</td>";

      } else if (i > highlightDay) {
         htmlCode += "<td class='calendar_dates' id = 'futureDays'>" + i + "</td>"; 
      
      } else {htmlCode += "<td class='calendar_dates'>" + i + dayRecipe[i] + "</td>";}
      if (weekDay === 6) htmlCode += "</tr>";

   }

   return htmlCode;
   //ends function calDays()

}

 