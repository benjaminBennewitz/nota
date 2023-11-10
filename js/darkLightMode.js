/*###############################
###
###     TOOGLE BETWEEN DARKMODE AND LIGHTMODE
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
*** switch functions for toogleing between dark and light mode
*/
function darkmode(){
    document.getElementById('content').classList.add('body-dark');
    document.getElementById('lm').classList.remove('hide');
    document.getElementById('dm').classList.add('hide');
}

function lightmode(){
    document.getElementById('content').classList.remove('body-dark');
    document.getElementById('lm').classList.add('hide');
    document.getElementById('dm').classList.remove('hide');
}