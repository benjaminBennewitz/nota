/*###############################
###
###     HELP AND GENERAL FUNCTIONS
###     NOTA APP
###     version 1.0.0
###     author: Benjamin Benenwitz
###
###
***       ██████╗  ▀█
***       ██╔══██╗ █▄
***       ██████╦╝
***       ██╔══██╗
***       ██████╦╝
***       ╚═════╝
###
#################################*/

/* 
*** function for general reload the page
*/
function rel(){
    location.reload();
}

/* 
*** function for general alert, for not yet implemented features
*** shows an brower alert by clicking on an element with no function
*/
function sorry(text){
    alert(`${text}`);
}

/* 
*** help function for deleting user inputs
*** set the value of the input and textarea field to empty string
*/
function clearfields(){
    document.getElementById('note-heading-const').value = '';
    document.getElementById('note-const').value = '';
}

