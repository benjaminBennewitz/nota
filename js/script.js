/*###############################
###
###     MAIN FUNCTIONS
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
*** ARRAYS DEKLARATIONS
*** headings array for the users input title
*** notes array fot the users input notes/text
*** trashHeadings array for deleted titles
*** trashNotes array for deleted notes
*** archiveHeadings array for archived titles
*** archiveNotes array for archived notes
*/
let headings = ['HEINZ','NOTE 1','NOTE 2','NOTE 3','NOTE 4','NOTE 5','NOTE 6','NOTE 7','NOTE 8'];
let notes = ['Ketschup','Content 1','Content 2','Content 3','Content 4','Content 5','Content 6','Content 7','Content 8'];

let trashHeadings = [];
let trashNotes = [];

let archiveHeadings = [];
let archiveNotes = [];


loadNotesFromStorage();


/* 
*** SHOWS THE MAIN CONTENT
*** SHOWS PREFILLED ARRAYS FOR TESTING
*/
function render(){
    let innerContent = document.getElementById('inner-content');
    innerContent.innerHTML = '';


    for (let i = 0; i < headings.length; i++){ 
        const titles = headings[i];
        const texts = notes[i];

        innerContent.innerHTML += `
            <div class="note-outer-inputs">
                <input id="title${i+1}" type="text" class="note-heading fix" value="${headings[i]}">
                <textarea id="text${i+1}" name="message">${notes[i]}</textarea>
                <div class="wrapper-inputs">
                    <div id="note-options" class="options-container-left">
                        <li><img class="options-icons-left" onclick="sorry('Nachbearbeitung noch ohne Funktion')" src="assets/ok.png"/></li>
                        <li><img class="options-icons-left" onclick="sorry('Nachbearbeitung noch ohne Funktion')" src="assets/note-edit.png"/></li>
                        <li><img class="options-icons-left" onclick="toArchive(${i})" src="assets/archiv-navy.png"></li>
                    </div>
                    <div class="options-container-right">
                        <li><img class="options-icons-right" onclick="deleteNote(${i})" src="assets/trash-navy.png"></li>
                    </div>
                </div>
            </div>
        `;
    }
}

/* 
*** SHOWS THE ARCHIVE CONTENT
*/
function renderArchive(){
    document.getElementById('archive-content').innerHTML = '';
    if(archiveHeadings.length <= 0 && archiveNotes.length <= 0){
        document.getElementById('archive-message').innerHTML = `<p class="message">Archive ist leer</p>`;
    }

    for(let i = 0; i < archiveHeadings.length; i++){
        const archHeading = archiveHeadings[i];
        const archNotes = archiveNotes[i];
        document.getElementById('archive-message').innerHTML = ``;
        document.getElementById('archive-content').innerHTML += `

        <div class="trash-outer-container">
            <div id="title${i+1+"d"}" type="text" class="note-heading-trash fix" value="">${archHeading}</div>
            <textarea id="text${i+1+"d"}" name="message">${archNotes}</textarea>
            <div class="wrapper-inputs-del">
                <div id="note-options"></div>
                <div class="options-container-right-del">
                    <li class="fix-hover"><img class="options-icons-right-del" onclick="restoreArchNote(${i})" src="assets/move.png"></li>
                    <li class="fix-hover"><img class="options-icons-right-del" onclick="deleteArchivedNoteForEver(${i})" src="assets/trash-navy.png"></li>
                </div>
            </div>
        </div>
        `; 
    }
}

/* 
*** SHOWS THE TRASH CONTENT
*/
function renderTrash(){
    document.getElementById('trash-content').innerHTML = '';
    if(trashHeadings.length <= 0 && trashNotes.length <= 0){
        document.getElementById('trash-message').innerHTML = `<p class="message">Papierkorb ist leer</p>`;
    }

    for(let i = 0; i < trashHeadings.length; i++){
        const delHeading = trashHeadings[i];
        const delNotes = trashNotes[i];
        document.getElementById('trash-message').innerHTML = ``;
        document.getElementById('trash-content').innerHTML += `

        <div class="trash-outer-container">
            <div id="title${i+1+"d"}" type="text" class="note-heading-trash fix" value="">${delHeading}</div>
            <textarea id="text${i+1+"d"}" name="message">${delNotes}</textarea>
            <div class="wrapper-inputs-del">
                <div id="note-options"></div>
                <div class="options-container-right-del">
                    <li class="fix-hover"><img class="options-icons-right-del" onclick="restoreDelNote(${i})" src="assets/move.png"></li>
                    <li class="fix-hover"><img class="options-icons-right-del" onclick="deleteNoteForEver(${i})" src="assets/trash-navy.png"></li>
                </div>
            </div>
        </div>
        `; 
    }
}


/* 
*** ADDS NOTES TO ARRAY
*/
function addNewNote(){
    let addHeadings = document.getElementById('note-heading-const').value;
    let addNotes = document.getElementById('note-const').value;

    headings.push(addHeadings);
    notes.push(addNotes);

    clearfields();
    render();
    saveNote();
}

/* 
*** ADDS NOTES TO ARCHIVE
*/
function toArchive(i){
    archiveHeadings.push(headings.splice(i,1)[0]);
    archiveNotes.push(notes.splice(i,1)[0]);

    render();
    saveNote();
}

/* 
*** ADDS NOTES TO TRASH
*/
function deleteNote(i){
    trashHeadings.push(headings.splice(i,1)[0]);
    trashNotes.push(notes.splice(i,1)[0]);

    render();
    saveNote();
}


/* 
*** DELETES SPECIFIC NOTE FROM TRASH
*/
function deleteNoteForEver(i){
    trashHeadings.splice(i,1)[0];
    trashNotes.splice(i,1)[0];

    saveNote();
    renderTrash();
}

/* 
*** DELETES SPECIFIC NOTE FROM ARCHIVE
*/
function deleteArchivedNoteForEver(i){
    trashHeadings.push(archiveHeadings.splice(i,1)[0]);
    trashNotes.push(archiveNotes.splice(i,1)[0]);

    saveNote();
    renderArchive();
}

/* 
*** RESTORE SPECIFIC NOTE FROM ARCHIVE TO DASHBOARD
*** PUSHES THE VALUES TO NORMAL ARRAYS
*/
function restoreArchNote(i){
    if (i >= 0 && i < archiveHeadings.length && i < archiveNotes.length) {
    headings.push(archiveHeadings.splice(i, 1)[0]);
    notes.push(archiveNotes.splice(i, 1)[0]);

    saveNote();
    renderArchive();
    render();
    }
}

/* 
*** RESTORE SPECIFIC NOTE FROM TRASH TO DASHBOARD
*** PUSHES THE VALUE TO NORMAL ARRAYS
*/
function restoreDelNote(i){
    if (i >= 0 && i < trashHeadings.length && i < trashNotes.length) {
    headings.push(trashHeadings.splice(i, 1)[0]);
    notes.push(trashNotes.splice(i, 1)[0]);

    saveNote();
    renderTrash();
    render();
    }
}


/* 
*** RESTORE ALL THE NOTES FROM ARCHIV TO DASHBOARD
*/
function restoreAll(){
    for(let i = 0; i < archiveHeadings.length; i++){
        headings.push(archiveHeadings[i]);
        notes.push(archiveNotes[i]);
    }
    archiveHeadings = [];
    archiveNotes = [];

    saveNote();
    renderArchive();
    render();
}

/* 
*** DELETES ALL THE NOTES FROM TRASH
*/
function deleteAll(){
    trashHeadings = [];
    trashNotes = [];

    saveNote();
    renderTrash();
}


/* 
*** filter function on desktop viewport
*/
function filterNotes(){
    let filter = document.getElementById('filter').value;
    filter = filter.toLowerCase();

    let filterContent = document.getElementById('inner-content');
    filterContent.innerHTML = '';

    for (let i = 0; i < headings.length; i++){
        let filterHeadings = headings[i];
        let filterNotes = notes[i];
        if(filterHeadings.toLowerCase().includes(filter)){
            filterContent.innerHTML += `
          <div class="note-outer-inputs">
                <input id="title${i+1}" type="text" class="note-heading fix" value="${filterHeadings}">
                <textarea id="text${i+1}" name="message">${filterNotes}</textarea>
                <div class="wrapper-inputs">
                    <div id="note-options" class="options-container-left">
                        <li><img class="options-icons-left" onclick="sorry('Nachbearbeitung noch ohne Funktion')" src="assets/ok.png"/></li>
                        <li><img class="options-icons-left" onclick="sorry('Nachbearbeitung noch ohne Funktion')" src="assets/note-edit.png"/></li>
                        <li><img class="options-icons-left" onclick="toArchive(${i})" src="assets/archiv-navy.png"></li>
                    </div>
                    <div class="options-container-right">
                        <li><img class="options-icons-right" onclick="deleteNote(${i})" src="assets/trash-navy.png"></li>
                    </div>
                </div>
            </div>
        `;
        }
    }
}

/* 
*** filter function on mobile viewport
*/
function filterNotesMobile(){
    let filter = document.getElementById('filter-mobile').value;
    filter = filter.toLowerCase();

    let filterContent = document.getElementById('inner-content');
    filterContent.innerHTML = '';

    for (let i = 0; i < headings.length; i++){
        let filterHeadings = headings[i];
        let filterNotes = notes[i];
        if(filterHeadings.toLowerCase().includes(filter)){
            filterContent.innerHTML += `
          <div class="note-outer-inputs">
                <input id="title${i+1}" type="text" class="note-heading fix" value="${filterHeadings}">
                <textarea id="text${i+1}" name="message">${filterNotes}</textarea>
                <div class="wrapper-inputs">
                    <div id="note-options" class="options-container-left">
                        <li><img class="options-icons-left" onclick="sorry('Nachbearbeitung noch ohne Funktion')" src="assets/ok.png"/></li>
                        <li><img class="options-icons-left" onclick="sorry('Nachbearbeitung noch ohne Funktion')" src="assets/note-edit.png"/></li>
                        <li><img class="options-icons-left" onclick="toArchive(${i})" src="assets/archiv-navy.png"></li>
                    </div>
                    <div class="options-container-right">
                        <li><img class="options-icons-right" onclick="deleteNote(${i})" src="assets/trash-navy.png"></li>
                    </div>
                </div>
            </div>
        `;
        }
    }
}


/* 
*** SAVE ARRAYS TO LOCAL STOTAGE
*** parse to string
*/
function saveNote(){
    let conHeadings = JSON.stringify(headings);
    localStorage.setItem('title', conHeadings);

    let conNotes = JSON.stringify(notes);
    localStorage.setItem('note', conNotes);

    let delHeadings = JSON.stringify(trashHeadings);
    localStorage.setItem('delTitle', delHeadings);

    let delNotes = JSON.stringify(trashNotes);
    localStorage.setItem('delNote', delNotes);

    let archHeadings = JSON.stringify(archiveHeadings);
    localStorage.setItem('archTitle', archHeadings);

    let archNotes = JSON.stringify(archiveNotes);
    localStorage.setItem('archNote', archNotes);
}

/* 
*** LOAD ARRAYS TO LOCAL STOTAGE
*/
function loadNotesFromStorage(){
    let conHeadings = localStorage.getItem('title');
    let conNotes = localStorage.getItem('note');

    if(conHeadings && conNotes){
        headings = JSON.parse(conHeadings);
        notes = JSON.parse(conNotes);
    }

    let delHeadings = localStorage.getItem('delTitle');
    let delNotes = localStorage.getItem('delNote');

    if(delHeadings && delNotes){
        trashHeadings = JSON.parse(delHeadings);
        trashNotes = JSON.parse(delNotes);
    }

    let archHeadings = localStorage.getItem('archTitle');
    let archNotes = localStorage.getItem('archNote');

    if(archHeadings && archNotes){
        archiveHeadings = JSON.parse(archHeadings);
        archiveNotes = JSON.parse(archNotes);
    }
}


