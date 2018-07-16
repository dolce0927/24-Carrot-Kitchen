/*
   Filename: 24ck_formsubmit.js
   Author: Rosanna Morey & Daniel Chrisostomo
   Due Date: June 16, 2018
   home page

   Purpose: The purpose of this program is to simply report on a
            successful completition of a valid Web form.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.

            And the form reset when OK on alert is selected

            The event function returns a value of false as we did
            in chapter 7 tutorial so that the
            form data does not have to continually be retyped.
*/

window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) window.alert("Thank you for subscribing to the Newsletter. Your information has been submitted.");
      document.getElementById("newsletter").reset();   
      return false;         
     }
}



   