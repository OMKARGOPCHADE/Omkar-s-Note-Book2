//let om=prompt("what is your name...?");
//document.write("hii "+om);
console.log("All Ok!");
shownotes();
//If user adds a note add it to the notes
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt');
let addtitle = document.getElementById('title');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
  let myobj = {
    Title : addtitle.value;
    Text : addTxt.value;
}
    notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    addtitle.value = "";
    //console.log(notes);
    shownotes();
})
//function to show elements from localstorage
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
    
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.Title}</h5>
            <p class="card-text"> ${element.Text}</p>
            <button type="button" id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Note</button>
        </div>
    </div>
        `;
    });
    let notesElm = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! use "Add a Note" section to add notes.`;
    }
}
// function to delete a note
function deleteNote(index) {
    //console.log("I am deleting " + index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}
let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener("input", function () {

    let inputVal = searchTxt.value.toLowerCase();
    //console.log("omshu "+ inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        //  console.log(cardTxt)

    })
})
