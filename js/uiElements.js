/*###############################
###
###     UI ELEMENTS HIDE AND DISPLAY
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
*** switch functions for toogleing between list style and tile style
*/
function listView(){
    document.getElementById('dash').classList.add('hide-burger');
    document.getElementById('list').classList.remove('hide-burger');

    document.getElementById('inner-content').style.flexDirection = 'column';
}

function dashView(){
    document.getElementById('list').classList.add('hide-burger');
    document.getElementById('dash').classList.remove('hide-burger');

    document.getElementById('inner-content').style.flexDirection = 'row';
}

/* 
*** functions for hide and display the general side menu, class name = burger-menu...
*/
function showBurger(){
    document.getElementById('side-menu').classList.remove('hide-burger');
    document.getElementById('side-menu').classList.add('visible-burger');
}

function closeBurger(){
    document.getElementById('side-menu').classList.add('hide-burger');
    document.getElementById('side-menu').classList.remove('visible-burger');
}

/* 
*** functions for hide and display the trash menu modal
*** shows all the deleted notes (arrays)
*/
function showTrashModal(){
    document.getElementById('trash-modal').classList.remove('hide');
    document.getElementById('trash-modal').classList.add('visible');
}

function closeTrashModal(){
    document.getElementById('trash-modal').classList.remove('visible');
    document.getElementById('trash-modal').classList.add('hide');
}

/* 
*** functions for hide and display the archive menu modal
*** shows all the archived notes (arrays)
*/
function showArchiveModal(){
    document.getElementById('archive-modal').classList.remove('hide');
    document.getElementById('archive-modal').classList.add('visible');
}

function closeArchiveModal(){
    document.getElementById('archive-modal').classList.remove('visible');
    document.getElementById('archive-modal').classList.add('hide');
}

/* 
*** functions for hide and display the extra menus in the navigation bar
*** shows extra options for the web app
*/
function showMainSettings(){
    document.getElementById('settings-modal').classList.remove('hide');
    document.getElementById('settings-modal').classList.add('visible');
}

function closeSettings(){
    document.getElementById('settings-modal').classList.remove('visible');
    document.getElementById('settings-modal').classList.add('hide');
}
